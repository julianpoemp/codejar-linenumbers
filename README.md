# rolltsup-sample
Sample repository for a project that uses rollup.js with Typescript.

## What is this?
It's an easy-to-use sample project for Typescript developers that just want to create a library. This repository builds a npm package ready for deployment with two builds: one for developers that want to inject the library within a `<script>` tag and one for Typescript developers that need typings. 

## How does the generated package looks like?
````
|- js
    |- my_library.js
    |- my_library.min.js
|- es
    |- // ES files with typings for Typescript
|- package.json
|- LICENSE
````

## How to use

1. Clone this repository:  ```git clone https://github.com/julianpoemp/rolltsup-sample.git```
2. Call `cd rolltsup-sample` and remove the `.git` folder. After that call `git init` for a fresh git initialization. If you are migrating from another project, just copy its `.git` folder to this one.
2. Call ```npm install```
3. Change the LICENSE and the rollup.globals.js
4. By default, there is a FooClass in the src folder. You can remove it or check if it's running when you call ````npm run start````
5. All your typescript files should be in the `src` folder. Put your exports into `src/index.ts`.
6. Don't forget to change this readme :).

## Commands

- `npm start`: calls rollup.js in watch mode.
- `npm run build:js`: builds the library to dist/js. The build contains an iife version incl. a minified version of it.
- `npm run build:es`: builds the library to dist/es. This build contains an ES version with all typings important for Typescript development.
- `npm run build`: Calls the last both commands and moves the LICENSE into the dist folder. This command builds the final package.

## Further information

- [rollup.js](http://rollupjs.org/guide/en/): package builder.
- [@rollup/plugin-typescript](https://www.npmjs.com/package/@rollup/plugin-typescript): TS plugin in order to compile TS.
- [@rollup-plugin-generate-package-json](https://www.npmjs.com/package/rollup-plugin-generate-package-json): Automatically copy package.json, change it and move it to the output directory.
