import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cp, mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

test('build preserves pages/assets, escapes data, and rejects invalid input', async () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const fixture = await mkdtemp(path.join(tmpdir(), '418coffee-test-'));
  const read = (file) => readFile(path.join(fixture, file), 'utf8');
  const build = () => execFileSync(process.execPath, [path.join(fixture, 'build.mjs')], { stdio: 'pipe' });
  try {
    for (const file of ['build.mjs', 'templates', 'pages', 'data', 'public']) {
      await cp(path.join(root, file), path.join(fixture, file), { recursive: true });
    }
    build();
    for (const [file, url] of [['index.html', '/'], ['past/index.html', '/past'], ['future/index.html', '/future'], ['contact/index.html', '/contact']]) {
      const html = await read(`dist/${file}`);
      assert.ok(html.includes(`href="${url}" aria-current="page"`));
      assert.ok(html.includes('<details'));
      assert.ok(!html.includes('<script'));
      assert.ok(!html.includes('{{'));
      assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
    }
    const past = await read('dist/past/index.html');
    assert.equal((past.match(/class="experience-card"/g) ?? []).length, 4);
    assert.equal((past.match(/class="project-card"/g) ?? []).length, 8);
    assert.match(await read('dist/404.html'), /Page not found/);
    assert.deepEqual(await readFile(path.join(fixture, 'public/cv.pdf')), await readFile(path.join(fixture, 'dist/cv.pdf')));
    assert.equal(await read('public/robots.txt'), await read('dist/robots.txt'));
    assert.equal(await read('public/assets/style.css'), await read('dist/assets/style.css'));

    const entries = JSON.parse(await read('data/experience.json'));
    entries[0].name = '<script>alert("x")</script> {{title}}';
    await writeFile(path.join(fixture, 'data/experience.json'), JSON.stringify(entries));
    build();
    const escaped = await read('dist/past/index.html');
    assert.ok(escaped.includes('&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; {{title}}'));
    assert.ok(!escaped.includes('<script'));
    entries[0].imageSrc = 'javascript:alert(1)';
    await writeFile(path.join(fixture, 'data/experience.json'), JSON.stringify(entries));
    assert.throws(build, /Expected an HTTP/);
    assert.equal(await read('dist/past/index.html'), escaped, 'failed builds leave previous output intact');

    entries[0].imageSrc = '/images/example.jpg';
    await writeFile(path.join(fixture, 'data/experience.json'), JSON.stringify(entries));
    await writeFile(path.join(fixture, 'templates/layout.html'), '{{missing}}');
    assert.throws(build, /Missing template value/);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});
