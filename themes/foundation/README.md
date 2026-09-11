# Foundation

A non-visual Hugo theme for document boilerplate, metadata, and asset loading.
It contains no site data, page layouts, CSS, JavaScript, or images.

## Using it

Copy this directory into another site's `themes/foundation/` and set
`theme = 'foundation'` in that site's `hugo.toml`. No additional tools are needed.

The site provides page templates under `layouts/`, defining a `main` block.
The foundation wraps that block in `<main>` inside the HTML document.

Optional site partials under `layouts/partials/`:

- `header.html`: before `<main>`; includes its own header markup.
- `footer.html`: after `<main>`; includes its own footer markup.
- `head-extra.html`: additional metadata or head elements.

## Configuration

Uses Hugo's site title, locale, base URL, page titles/descriptions, and built-in
Open Graph and Twitter card templates. Additional site parameters:

- `languageDir`: HTML direction; defaults to `ltr`.
- `mainClass`: optional class on `<main>`.
- `theme.color`: optional browser theme-color metadata.
- `remoteCss`, `css`, `remoteJs`, `js`: ordered asset lists, loaded in that order.

Page front matter may set `classes` to a list of body classes.
Personal metadata and site-specific data schemas belong to the site.

## Assets

Local list entries are relative to the site's `assets/` directory, conventionally
`css/` and `js/`. Remote entries are URLs fetched by Hugo and served locally.
Files under `static/` are copied unchanged by Hugo.

Local CSS/JS is evaluated as a Hugo template, then fingerprinted in production.
Local scripts use `type="module"`; remote scripts use `defer`.
Development uses unfingerprinted top-level assets and replaces `.min.` in remote
URLs with `.`. The existing remote source-map publishing behavior is retained;
this theme does not generate source maps or automatically minify local assets.

Favicons are picked up from `assets/img/favicon.svg` and
`assets/img/favicon.png` when present. Their names are fixed conventions.
