# backdrop-polyfill-chrome
Backdrop filter polyfill for browsers that do not support it

#### Safari already has backdrop-filter support, so this is not needed for it.

## Documentation
First add the script
`<script src="backdrop-polyfill-chrome.js"></script></script>`

Then use the API
`backdrop(backdropsource, backdropapply, blur, scroller)`

backdropsource: the dom element where backdrop is going to be applied from

backdropapply: the dom element where backdrop is going to be applied to

blur: the amout of blur (equivalent to `backdropfilter: blur`)

scroller: (string) keep it to yes.

example: `backdrop(document.documentElement.outerHTML, document.getElementById('xx'), 20, "yes");`
