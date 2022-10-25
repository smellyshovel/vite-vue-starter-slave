// This config is used by the demo

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

    root: resolve(__dirname, "demo"),

    resolve: {
      // to be able to self-reference the lib in the demo
      dedupe: ["vue"],
    },

    optimizeDeps: {
      // TODO: use the slave's actual name
      exclude: ["vite-vue-starter-slave"],
    },

    server: {
      // allow the access to all the slaves' sourcemap files
      fs: {
        allow: [".."],
      },

      proxy: {
        // demo server's proxy rules
      },
    },
  });
};
