# 418coffee.net

This is the code that runs [418coffee.net](https://418coffee.net/).

## Table of contents

- [Stack](#stack)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Stack

- HTML and CSS
- [Node.js](https://nodejs.org/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Development

Build with Node.js 22 or newer. No package installation is required.

```sh
node build.mjs
python3 -m http.server 8080 --bind 127.0.0.1 --directory dist
```

Open [localhost:8080](http://localhost:8080). Rebuild after editing source files.
Run checks with `node --test`.

Experience and project entries live in `data/`; page content lives in `pages/`.
Shared HTML lives in `templates/`; styles, images, and the favicon live in `public/`.
The build generates `dist/`, which should not be edited directly.

For Cloudflare Pages, use framework preset **None**, build command `node build.mjs`,
output directory `dist`, and Node.js 22 or newer.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
