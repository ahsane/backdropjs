# CSS backdrop-filter polyfill
Backdrop filter polyfill for browsers that do not support it

#### Safari already has backdrop-filter support, so this is not needed for it.

#### Demo https://ahsane.github.io/backdrop-polyfill-chrome/index.html

## Documentation
First add the script
`<script src="backdrop-polyfill-chrome.js"></script>`

Then use the API
`backdrop(backdropsource, backdropapply, blur, scroller)`

Backdropsource: The dom element where backdrop is going to be applied from

Backdropapply: The dom element where backdrop is going to be applied to

Blur: The amout of blur (equivalent to `backdropfilter: blur`)

Scroller: (string [yes/no]) Keep this to yes. 

Example: `backdrop(document.documentElement.outerHTML, document.getElementById('xx'), 20, "yes");`


**Current limitation:** This works only for static content. Working on supporting dynamic content. 
