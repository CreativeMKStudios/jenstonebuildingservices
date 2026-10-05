import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const onPages = process.env.GITHUB_PAGES === "true";
const base = onPages ? "/jenstonebuildingservices" : "/";

function prefixRootLinks(basePath) {
  const normalized = basePath.replace(/\/$/, "");
  return {
    name: "prefix-root-links",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        if (!normalized) return;
        const root = fileURLToPath(dir);
        const pattern = new RegExp(`(href|src|action)="/(?!${normalized.slice(1)}/)`, "g");

        async function walk(folder) {
          const entries = await readdir(folder, { withFileTypes: true });
          for (const entry of entries) {
            const path = join(folder, entry.name);
            if (entry.isDirectory()) {
              await walk(path);
              continue;
            }
            if (!entry.name.endsWith(".html")) continue;
            const html = await readFile(path, "utf8");
            const next = html.replace(pattern, `$1="${normalized}/`);
            if (next !== html) await writeFile(path, next);
          }
        }

        await walk(root);
      },
    },
  };
}

export default defineConfig({
  site: onPages ? "https://creativemkstudios.github.io" : "https://jenstonebuildingservices.co.uk",
  base,
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
    prefixRootLinks(base),
  ],
});
