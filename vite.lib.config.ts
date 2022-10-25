// This config is used by the lib

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  // make all the Vite's env. variables available in this config file
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), visualizer()],

    // TODO: uncomment and list all the direct sub-slaves (if any)
    // optimizeDeps: {
    //   exclude: ["vite-vue-starter-slave"],
    // },

    build: {
      outDir: "dist",
      emptyOutDir: false, // can't empty because of dev:lib errors breaking the master app

      lib: {
        entry: resolve(__dirname, "src/main.ts"),
        formats: ["es", "cjs"],
      },

      rollupOptions: {
        // TODO: list all the peer dependencies (except for the slave itself)
        external: ["vue"],
      },

      sourcemap: true,
    },
  });
};
