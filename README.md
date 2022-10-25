# Vite Vue Starter **Slave** template

[**A word on terminology.**](<https://en.wikipedia.org/wiki/Master/slave_(technology)>)

## Features

- Standalone mode support
- A master-app built-in support
- Pre-configured environment
  - Vite
  - TypeScript
  - Husky + lint-staged
  - ESLint
  - Prettier
- Built-in and pre-configured demo-app

## What is and for?

A part of the [master](<(https://github.com/smellyshovel/vite-vue-starter-master)>) - slave blueprint-setup for a quick Vue application kickstart.

Useful in cases where a Vue application depends on a shared library developed by the same team as the application itself.

This is the **slave** part of the setup.

## Usage

**If this slave-lib implements the sub-slaving pattern, go to the next nested slave.**

**Read the [rationale](https://github.com/smellyshovel/vite-vue-starter-master#rationale) first**. The "Todo UI" example from there is referenced below.

1. Clone the repo
2. Rename the folder to "todo_ui"
3. `rm -rf .git && git init` to re-initialize the `.git` folder in order to detach the library from _this_ repository

Make the following changes in the cloned files (**4 files** in total):

- `package.json`

  - Change the package `name` to "todo_ui"
  - In the `module` field, change the `"vite-vue-starter-slave"` part to `"todo_ui"`
  - In the `env:prep` script, change the `"npm link vite-vue-starter-slave"` part to` "npm link todo_ui"`
  - In the `peerDependencies` section, change `"vite-vue-starter-slave": "file:./"` to `"todo_ui": "file:./"`
  - If there are other slave-libs for _this_ slave-lib, specify them in `dependencies`

- `vite.lib.config.ts`, `vite.demo.config.ts` and `tailwind.config.cjs`
  - Address all the `TODO`s inside these files

Run `npm i` and then `npm run env:prep`.

Now you can focus on developing the actual library inside the `/src` folder. Vue components, separate modules and scripts - whatever comprises your lib.

In order to get the lib tested, you need to make use of the library in the demo app and then to serve this demo app.

1. Navigate to the `/demo` folder and make use of the library's exports
2. Make sure to reference the library as you would do from and other application (i.e. not using the relative `/src`-paths). You should be able to instead import everything from your lib with `import TodoUI from "todo_ui"`, which becomes possible thanks to the `env:prep` script invoked earlier that self-links the lib into the demo
3. Get the demo app up and running with `npm run dev:demo`
4. For the demo to respect live-changes to the library's code (i.e. for the lib to auto-recompile on changes), get the lib's watcher-server up with `npm run dev:lib`

Continue developing and testing the library.

When done, build the `/dist` folder with `npm run build` command and refer to the [master-library](https://github.com/smellyshovel/vite-vue-starter-slave)'s README (or repeat the process for the next slave-lib in the sub-slaving chain).

## Other points to know

1. The demo app is a good candidate to be shared with GitHub Actions to **GitHub Pages** to provide your library users with an ability to see it live.
2. The type-declaration output files are not rebuilt by the dev-server. That's if the master-app doesn't see the TypeScript-related changes you introduce into the slave-lib, you need to manually restart the dev-server for `vue-tsc` to rebuild the types or instead simply invoke the `npm run build:lib` command. The same applies to the demo as well, since the `/dist` folder's contents are used by the demo rather than the lib's source files.
