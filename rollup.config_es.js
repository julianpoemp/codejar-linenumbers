import typescript from '@rollup/plugin-typescript';
import generatePackageJson from 'rollup-plugin-generate-package-json'
import {namespaceName} from "./rollup.globals";
import copy from 'rollup-plugin-copy'

// rollup.config.js
export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist/es',
        name: namespaceName,
        format: 'es'
    },
    plugins: [
        typescript({
            target: "ES5",
            declaration: true,
            outDir: "dist/es",
            rootDir: "src"
        }),
        generatePackageJson({
            outputFolder: "dist",
            baseContents: (pkg) => {
                pkg.main = "es/index.js";
                pkg.scripts = undefined;
                return pkg;
            }
        }),
        copy({
            targets: [
                { src: 'src/codejar-linenumbers.css', dest: 'dist/es' }
            ]
        })
    ]
};
