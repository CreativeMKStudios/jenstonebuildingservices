# Jenstone Building Services

Static website for Jenstone Building Services, a family building firm at 9 Goldington Road, Bedford.

Built with Astro. Pages cover the home, about, services, projects, reviews, areas and contact. The build writes `sitemap-index.xml`. `robots.txt` points at it.

```bash
npm install
npm run dev
npm run build
```

The public site is published from `main` to the `site` branch:

https://raw.githack.com/CreativeMKStudios/jenstonebuildingservices/site/index.html

A normal `npm run build` keeps canonical links on jenstonebuildingservices.co.uk. Set `CDN_PUBLISH=true` for that public address, or `GITHUB_PAGES=true` for https://creativemkstudios.github.io/jenstonebuildingservices/ once GitHub Pages is switched on.
