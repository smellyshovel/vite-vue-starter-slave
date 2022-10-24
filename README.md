# Vite Vue Starter **Slave** template

## What is and for?

A part of the [master](<(https://github.com/smellyshovel/vite-vue-starter-master)>)-slave blueprint-setup for a quick application kickstart.

Useful in cases where a Vue application depends on a shared library developed by the same team as the application itself.

This is the **slave** part of the setup.

## Features

- Standalone mode support
- A master-app built-in support
- Pre-configured environment
- Script for generating docs using TypeDoc _(in-progress)_
- Built-in and pre-configured demo-app
- Built-in and pre-configured Storybook _(in-progress)_

## Rationale

Imagine you have an application called Todo App. The application has a dependency - a shared component and general-purpose (util) library that's also developed by you (or your team) and is also intended to be used not only in the Todo App, but in some other applications either. Let's call the library Todo UI.

In such a case it makes the most sense to develop the library as a standalone application and share it using the NPM (either globally, or even within a private registry).

Thus, you can later include the library in any other project where it makes sense to use it.

The only issue with such an approach is that you still need some place to test the library. And testing the Todo UI solely inside the Todo App is generally considered a bad practice. Therefore, you'd need to set a testing environment up on the level of the library.

This template does exactly that. It provides you with a ready-to use lib-demo-docs solution, so it **can also be used without the [master](<(https://github.com/smellyshovel/vite-vue-starter-master)>) application**, i.e. as a standalone application.

_Paradoxically, in this master-slave setup, the completely independent and optionally-standalone part is **slave**, rather than master. In other words, you don't necessarily need the master part for this slave part to work, but you absolutely need a slave-lib for a master-app to work._

## Usage

_(Sticking to the aforementioned "Todo UI" example, using the "todo_ui" as the lib's name)_

1. Clone the repo
2. Rename the folder to "todo_ui"
3. `rm -rf .git && git init` - Re-initialize the `.git` folder to detach the library from _this_ repository
4. Inside `package.json` file:
   1. Change the package name to "todo_ui"
   2. In the `module` field, change the "vite-vue-starter-slave" part to "todo_ui"
   3. In the `env:prep` script, change the "npm link vite-vue-starter-slave" part to "npm link todo_ui"
   4. In the `peerDependencies` section, change "vite-vue-starter-slave": "file:./" to "todo_ui": "file:./"
5. Run `npm i`
6. Run `npm run env:prep`

Now you can focus on developing the actual library inside the `/src` folder. Vue components, separate modules and scripts - whatever comprises your lib.

In order to get the lib tested, you need to make use of the library in the demo app.

1. Navigate to the `/demo` folder and make use of the library's exports
2. Make sure to reference the library as you would do from and other application (i.e. not using the relative `/src` -paths). You should be able to instead import everything from your lib with `import TodoUi from "todo_ui"`, which becomes possible thanks to self-linking the lib during the step #6 from the list above.
3. Get the demo app up and running with `npm run dev:demo`
4. For the demo to respect live-changes to the library's code (i.e. for the lib to auto-recompile on changes), get the lib's watcher-server up with `npm run dev:lib`

Continue developing and testing the library.

When done, release the `/dist` folder with `npm run build` command and refer to the [master-library](https://github.com/smellyshovel/vite-vue-starter-slave)'s README.
