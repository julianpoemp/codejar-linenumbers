# codejar-linenumbers

Third party package that enables line numbers on [CodeJar](https://github.com/antonmedv/codejar) code editor for version >= 4. It's already used by [ngx-codejar](https://github.com/julianpoemp/ngx-codejar) - an Angular wrapper for Codejar.

## Demo

https://codepen.io/julianpoemp/full/jOjgQzG

## Background

CodeJar 4 dropped the line numbers feature. This package returns it.

## Installation 

### Via NPM

1. Make sure you have CodeJar >= 4.0.0 installed.
2. Install codejar-linenumbers
    ````
    npm install --save codejar-linenumbers
    ````
3. If you don't want to use ESM you can import this library using the IFFEE build:

````HTML
<!-- place the CSS file after the HighlightJS/PrismJS stylesheets -->
<link rel="stylesheet" href="<node_modules_dir>/codejar-linenumbers/js/codejar-linenumbers.css"/>
<script type="application/javascript" src="<node_modules_dir>/codejar-linenumbers/js/codejar-linenumbers.min.js"></script>
````

4. If you want to use this library with ESM or Typescript, don't forget to load the `codejar-linenumbers.css` file into your app.
### Via CDN

#### IFFEE (no module)

````HTML
<!-- place the CSS file after the HighlightJS/PrismJS stylesheets -->
<link rel="stylesheet" href="https://unpkg.com/codejar-linenumbers/js/codejar-linenumbers.css"/>
<script type="application/javascript" src="https://unpkg.com/codejar-linenumbers/js/codejar-linenumbers.min.js"></script>
````

#### ESM

````HTML
<!-- place the CSS file after the HighlightJS/PrismJS stylesheets -->
<link rel="stylesheet" href="https://unpkg.com/codejar-linenumbers/es/codejar-linenumbers.css"/>
<script type="application/javascript" src="https://unpkg.com/codejar-linenumbers/es/index.js"></script>
````


## Use

### Typescript

````Typescript
import {CodeJar} from 'codejar';
import {withLineNumbers} from "codejar-linenumbers";

const jar = CodeJar(editor, withLineNumbers(highlight), {tab: '\t'});
````

### Javascript

### ESM
For static HTML see example here: https://codepen.io/julianpoemp/pen/jOjgQzG .

### Vanilla JS
Make sure that the `codejar-linenumbers/js/codejar-linenumbers.min.js` file was loaded.

````Javascript
var jar = CodeJar(editor, CodeJar.withLineNumbers(highlight), {tab: '\t'});
````

## Issues
Please make sure that the issue is related to linenumbers only. For issues related to CodeJar please create issues [here](https://github.com/antonmedv/codejar/issues).
