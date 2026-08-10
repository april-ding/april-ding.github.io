# April Ding Portfolio

Photography portfolio at [aprilding.com](https://aprilding.com).

## Structure

- **Root** — current site (built from `v2/`)
- **`v2/`** — React source for the current site
- **`v1/`** — archived previous portfolio at [aprilding.com/v1](https://aprilding.com/v1/)

## Local development

```bash
cd v2
npm install --registry=https://registry.npmjs.org
npm run dev
```

## Publish the current site

```bash
cd v2
npm run publish:root
```

Then commit and push this repo (keeps `CNAME`, `v1/`, and `v2/`).
