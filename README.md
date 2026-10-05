# Jenstone Building Services

Static website for Jenstone Building Services, a family building firm at 9 Goldington Road, Bedford.

Built with Astro. Pages cover the home, about, services, projects, reviews, areas and contact. The build writes `sitemap-index.xml`. `robots.txt` points at it.

```bash
npm install
npm run dev
npm run build
```

The public site is published from `main` to GitHub Pages:

https://creativemkstudios.github.io/jenstonebuildingservices/

A normal `npm run build` keeps canonical links on jenstonebuildingservices.co.uk. The Pages workflow sets `GITHUB_PAGES=true` so links work on the GitHub address.
