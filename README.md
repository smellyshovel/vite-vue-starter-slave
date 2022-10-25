# Vite Vue Starter **Slave** template

[**A word on terminology.**](<https://en.wikipedia.org/wiki/Master/slave_(technology)>)

## Features

- Standalone mode support
- A master-app built-in support
- Pre-configured environment (Vite, TypeScript, <s>Husky</s> WIP, ESLint, Prettier, <s>Storybook</s> WIP)
- Script for generating docs using TypeDoc _(in-progress)_
- Built-in and pre-configured demo-app
- Built-in and pre-configured Storybook _(in-progress)_

## What is and for?

A part of the [master](<(https://github.com/smellyshovel/vite-vue-starter-master)>)-slave blueprint-setup for a quick Vue application kickstart.

Useful in cases where a Vue application depends on a shared library developed by the same team as the application itself.

This is the **slave** part of the setup.

## Usage

**Read the master [Rationale](https://github.com/smellyshovel/vite-vue-starter-master#rationale) first**. The Todo UI example from there is referenced below.

**If this slave-lib implements the sub-slaving pattern, go to the next nested slave.**

1. Clone the repo
2. Rename the folder to "todo_ui"
3. `rm -rf .git && git init` t re-initialize the `.git` folder to detach the library from _this_ repository
4. Inside the `package.json` file:
   1. Change the package `name` to "todo_ui"
   2. In the `module` field, change the "vite-vue-starter-slave" part to "todo_ui"
   3. In the `env:prep` script, change the "npm link vite-vue-starter-slave" part to "npm link todo_ui"
   4. In the `peerDependencies` section, change `"vite-vue-starter-slave": "file:./"` to `"todo_ui": "file:./"`
   5. If the setup implements the sub-slaving pattern (described in the master repository), make sure to also reference all the todo_ui's direct slaves
5. In the `vite.demo.config.ts`'s `optimizeDeps.exclude` array, change the `"vite-vue-starter-slave"` part to `"todo_ui"`
6. If the setup implements the sub-slaving pattern (described in the master repository), make sure to add into this array all the todo_ui's direct slaves
7. Run `npm install`
8. Run `npm run env:prep`

Now you can focus on developing the actual library inside the `/src` folder. Vue components, separate modules and scripts - whatever comprises your lib.

In order to get the lib tested, you need to make use of the library in the demo app and then tto serve this demo app.

1. Navigate to the `/demo` folder and make use of the library's exports
2. Make sure to reference the library as you would do from and other application (i.e. not using the relative `/src`-paths). You should be able to instead import everything from your lib with `import TodoUi from "todo_ui"`, which becomes possible thanks to self-linking the lib during the step #8 from the list above
3. Get the demo app up and running with `npm run dev:demo`
4. For the demo to respect live-changes to the library's code (i.e. for the lib to auto-recompile on changes), get the lib's watcher-server up with `npm run dev:lib`

Continue developing and testing the library.

When done, release the `/dist` folder with `npm run build` command and refer to the [master-library](https://github.com/smellyshovel/vite-vue-starter-slave)'s README.

## Other points to consider

<s>Easily create **documentation** for your library with `npm run build:doc` and update it while working on the code comments with `npm run dev:doc`. **Only available for .ts files, won't work with .vue files since TypeDoc doesn't support that**.</s> - In progress

The demo app is a good candidate to be shared with GitHub Actions to **GitHub Pages** to provide your library users an ability to see it live.

The type-declaration output files are not rebuilt by the dev-server. That's if the master app doesn't see the TypeScript-related changes you introduce into the slave-lib, you need to manually restart the dev-server for `vue-tsc` to rebuild the types or instead simply invoke the `npm run build:lib` command. The same applies to the demo as well, since the `/dist` folder's contents are used by the demo rather than the lib's source files.
