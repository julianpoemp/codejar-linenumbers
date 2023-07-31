// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";
import {scriptName, namespaceName} from "./rollup.globals";
import copy from "rollup-plugin-copy";

export default {
    input: 'src/index.ts',
    output: [
        {
            file: `dist/js/${scriptName}.js`,
            name: namespaceName,
            format: 'iife'
        },
        {
            file: `dist/js/${scriptName}.min.js`,
            name: namespaceName,
            format: 'iife',
            plugins: [
                terser()
            ]
        }
    ],
    plugins: [
        typescript({
            target: "es2020",
            declaration: true,
            outDir: "dist/js",
            rootDir: "src"
        }),
        copy({
            targets: [
                { src: 'src/codejar-linenumbers.css', dest: 'dist/js' }
            ]
        })
    ]
};
