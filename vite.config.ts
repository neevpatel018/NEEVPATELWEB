import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    assetsDir: "assets",
  },
  publicDir: "public",
  server: {
    port: 5173,
    host: true,
    open: true
  }
});
