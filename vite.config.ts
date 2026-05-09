import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = rootDir;
const pagesDir = path.join(siteRoot, "pages");

const htmlInputs = [
    path.join(siteRoot, "index.html"),
    ...readdirSync(pagesDir)
        .filter((fileName) => fileName.endsWith(".html"))
        .map((fileName) => path.join(pagesDir, fileName)),
];

export default defineConfig({
    base: "./",
    server: {
        host: "0.0.0.0",
        open: "/index.html",
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: Object.fromEntries(
                htmlInputs.map((filePath) => [
                    path.basename(filePath, ".html"),
                    filePath,
                ]),
            ),
        },
    },
});
