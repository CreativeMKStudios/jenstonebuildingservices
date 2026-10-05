import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const onPages = process.env.GITHUB_PAGES === "true";
const onCdn = process.env.CDN_PUBLISH === "true";
const cdnOrigin = "https://raw.githack.com";
const cdnBase = "/CreativeMKStudios/jenstonebuildingservices/site";
const base = onCdn ? cdnBase : onPages ? "/jenstonebuildingservices" : "/";
const publicOrigin = (process.env.PUBLIC_SITE_URL || "").replace(/\/$/, "");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toDirectoryIndex(pathname, prefix) {
  if (pathname === prefix) return `${prefix}/index.html`;
  if (!pathname.startsWith(`${prefix}/`)) return pathname;
  if (pathname.endsWith("/")) return `${pathname}index.html`;
  return pathname;
}

function rewriteUrl(value, prefix, origin) {
  if (!value || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("tel:")) {
    return value;
  }

  if (origin && value.startsWith(origin)) {
    const url = new URL(value);
    url.pathname = toDirectoryIndex(url.pathname, prefix);
    return url.href;
  }

  if (value.startsWith("/")) return toDirectoryIndex(value, prefix);
  return value;
}

function rewriteSrcset(value, prefix, origin) {
  return value
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return trimmed;
      const pieces = trimmed.split(/\s+/);
      pieces[0] = rewriteUrl(pieces[0], prefix, origin);
      return pieces.join(" ");
    })
    .join(", ");
}

function preparePublishedFiles({ prefix, origin }) {
  const normalized = prefix.replace(/\/$/, "");
  return {
    name: "prepare-published-files",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        if (!normalized) return;
        const root = fileURLToPath(dir);
        const attributePattern = new RegExp(
          `(href|src|action)="/(?!${escapeRegExp(normalized.slice(1))}/)`,
          "g",
        );

        async function walk(folder) {
          const entries = await readdir(folder, { withFileTypes: true });
          for (const entry of entries) {
            const path = join(folder, entry.name);
            if (entry.isDirectory()) {
              await walk(path);
              continue;
            }

            if (entry.name.endsWith(".html")) {
              let html = await readFile(path, "utf8");
              const prefixed = html.replace(attributePattern, `$1="${normalized}/`);
              const rewritten = origin
                ? prefixed
                    .replace(/(href|src|action|content)="([^"]*)"/g, (_, attr, value) => {
                      return `${attr}="${rewriteUrl(value, normalized, origin)}"`;
                    })
                    .replace(/srcset="([^"]*)"/g, (_, value) => {
                      return `srcset="${rewriteSrcset(value, normalized, origin)}"`;
                    })
                    .replace(new RegExp(`"(${escapeRegExp(origin)}[^"]+)"`, "g"), (_, value) => {
                      return `"${rewriteUrl(value, normalized, origin)}"`;
                    })
                : prefixed;
              if (rewritten !== html) await writeFile(path, rewritten);
              continue;
            }

            if (!origin) continue;
            if (!/\.(xml|txt|webmanifest)$/.test(entry.name)) continue;
            const text = await readFile(path, "utf8");
            const directoryUrl = new RegExp(
              `${escapeRegExp(origin + normalized)}(?:/[A-Za-z0-9._~-]+)*/(?=["'<\\s])`,
              "g",
            );
            const next = text
              .replaceAll("/jenstonebuildingservices/", `${normalized}/`)
              .replace(directoryUrl, (match) => `${match}index.html`)
              .replace(`"start_url": "${normalized}/"`, `"start_url": "${normalized}/index.html"`);
            if (next !== text) await writeFile(path, next);
          }
        }

        await walk(root);
      },
    },
  };
}

export default defineConfig({
  site: onCdn
    ? cdnOrigin
    : publicOrigin
      ? publicOrigin
      : onPages
        ? "https://creativemkstudios.github.io"
        : "https://jenstonebuildingservices.co.uk",
  base,
  vite: {
    define: {
      "import.meta.env.PUBLIC_SITE_URL": JSON.stringify(onCdn ? cdnOrigin : publicOrigin),
    },
  },
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
    preparePublishedFiles({
      prefix: base,
      origin: onCdn ? cdnOrigin : "",
    }),
  ],
});
