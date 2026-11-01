import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const read = (file) => readFile(path.join(root, file), 'utf8');
const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

// Double braces escape text. Triple braces insert trusted, rendered templates only.
function render(template, values) {
  return template.replace(/\{\{\{(\w+)\}\}\}|\{\{(\w+)\}\}/g, (_, raw, text) => {
    const key = raw ?? text;
    if (!Object.hasOwn(values, key)) throw new Error(`Missing template value: ${key}`);
    return raw ? values[key] : escape(values[key]);
  });
}

function safeUrl(value) {
  if (typeof value !== 'string' || !(/^(https?:\/\/|\/(?!\/))/.test(value)) || /[\s\\]/.test(value)) {
    throw new Error(`Expected an HTTP(S) or root-relative URL: ${value}`);
  }
  return value;
}

const routes = [
  { name: 'present', title: 'Present', url: '/', file: 'index.html' },
  { name: 'past', title: 'Past', url: '/past', file: 'past/index.html' },
  { name: 'future', title: 'Future', url: '/future', file: 'future/index.html' },
  { name: 'contact', title: 'Contact', url: '/contact', file: 'contact/index.html' },
];
const [layout, navigation, experienceTemplate, projectTemplate, experienceData, projectData] = await Promise.all([
  read('templates/layout.html'), read('templates/navigation.html'),
  read('templates/experience.html'), read('templates/project.html'),
  read('data/experience.json').then(JSON.parse), read('data/projects.json').then(JSON.parse),
]);

const experience = experienceData.map((entry) => render(experienceTemplate, {
  ...entry,
  imageSrc: safeUrl(entry.imageSrc),
  nameMarkup: entry.href
    ? `<a href="${escape(safeUrl(entry.href))}" target="_blank" rel="noopener noreferrer">${escape(entry.name)} <span aria-hidden="true">↗</span></a>`
    : escape(entry.name),
})).join('\n');

const languages = { V: 'v', Python: 'python', Go: 'go', 'C++': 'cpp', Kotlin: 'kotlin' };
const projects = projectData.map((entry) => render(projectTemplate, {
  ...entry,
  href: safeUrl(entry.href),
  contribution: entry.contributed ? '<small>(contributed)</small>' : '',
  languageMarkup: entry.language
    ? `<span class="language-dot ${languages[entry.language] ?? ''}" aria-hidden="true"></span> ${escape(entry.language)}`
    : 'n/a',
})).join('\n');

// Render everything before replacing the generated output, so template errors fail early.
const output = await Promise.all([...routes, { title: 'Page not found', url: null, file: '404.html' }].map(async (route) => {
  const source = route.file === '404.html' ? '404' : route.url === '/' ? 'index' : route.name;
  const links = routes.map((item) => `<a href="${item.url}"${item.url === route.url ? ' aria-current="page"' : ''}>${item.name}</a>`).join('\n');
  return {
    file: route.file,
    html: render(layout, {
      title: route.title,
      navigation: render(navigation, { links }),
      content: render(await read(`pages/${source}.html`), { experience, projects }),
    }),
  };
}));
const destination = path.join(root, 'dist');
await rm(destination, { recursive: true, force: true });
await cp(path.join(root, 'public'), destination, { recursive: true });
for (const { file, html } of output) {
  const target = path.join(destination, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);
}
console.log(`Built ${output.length} pages in dist/`);
