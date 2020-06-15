[![NPM version](https://img.shields.io/npm/v/backdropjs.svg)](https://www.npmjs.com/package/backdropjs)

# CSS backdrop filter polyfill

**Demo:** https://ahsane.github.io/backdropjs/index.html 

Backdrop filter polyfill for browsers that do not support it

#### Safari, Chrome, Edge already has backdrop-filter support, so this is not needed for it.
### Package Manager
`npm install backdropjs --save`

`yarn add backdropjs`

## Documentation
**Current limitation:** This works only for static content. 

First add the script
`<script src="backdrop.js"></script>`

Then use the API
`backdrop(backdropsource, backdropapply, blur, scroller)`

backdropsource: The dom element where backdrop is going to be applied from

backdropapply: The dom element where backdrop is going to be applied to

blur: The amout of blur in px (equivalent to `backdrop-filter: blur`)

scroller: `(string [yes/no])` Keep this to *yes*. 

Example: `backdrop(document.documentElement.outerHTML, document.getElementById('xx'), 20, "yes");`
