// This config is used by the lib

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // make all the Vite's env. variables available in this config file
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), visualizer()],

    build: {
      outDir: "dist",
      emptyOutDir: false, // can't empty because of dev:lib errors in master

      lib: {
        entry: resolve(__dirname, "src/vite-vue-starter-slave.ts"),
        formats: ["es", "cjs"],
      },

      rollupOptions: {
        external: ["vue"], // vue is a peer dependencies
      },

      sourcemap: true,
    },
  });
};
