# evansosenko.com

[![Check](https://github.com/evansosenko/evansosenko.com/actions/workflows/check.yml/badge.svg)](https://github.com/evansosenko/evansosenko.com/actions/workflows/check.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/10283222-7d80-4346-94d0-f438483033d4/deploy-status)](https://app.netlify.com/projects/evansosenko/deploys)

[Personal website][evansosenko.com] for Evan Sosenko.

[evansosenko.com]: https://evansosenko.com

## Development

Install [mise](https://mise.jdx.dev/), clone the repository, and start locally:

```sh
mise install
mise run dev
```

Build the site:

```sh
mise run build
```

### Updating Hugo Baseplate

To update [Hugo Baseplate](https://github.com/razor-x/hugo-baseplate):

```sh
mise run update-baseplate
```

### Linting

Check with [Biome](https://biomejs.dev/):

```sh
mise run check
```

Apply fixes:

```sh
mise run fix
```

Run CI checks:

```sh
mise run ci
```

## License

The code and content for this site is is Copyright (c) 2013-2026 Evan Sosenko.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
