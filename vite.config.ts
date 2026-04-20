import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

const spa404Plugin = () => ({
  name: "spa-404-fallback",
  closeBundle() {
    const distDir = path.resolve(__dirname, "dist");
    const indexPath = path.join(distDir, "index.html");
    const fallbackPath = path.join(distDir, "404.html");

    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, fallbackPath);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: "spa",
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [react(), spa404Plugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
