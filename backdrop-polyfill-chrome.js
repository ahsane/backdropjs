/**
 * Author: AhsanEjaz
 * Twitter: https;//twitter.com/AhsanEjazA
 * GitHub: https://github.com/AhsanE
 * Note: The polyfill requires Javscript.
 * License: MIT
 */

var backdropframe // reserved variable
var backdropdoc // reserved (reference to the backdropframe contentwindow)

var backdropsource // (DOM ELEMENT) should be a DOM element which is the source for the backdrop
var backdropapply // (DOM ELEMENT) should be a DOM element where backdrop is applied
var blur // (number) should be a number to represent a blur value in px
var scroller // (string) should the backdrop HTML scroll to the position of page (yes / no)

function backdrop(backdropsource, backdropapply, blur, scroller) {
	if (document.getElementById('iniframe') == null) {
		backdropframe = document.createElement('iframe')
		backdropframe.style.border = 'none'
		backdropframe.width = '100%'
		backdropframe.height = '100%'
		backdropapply.appendChild(backdropframe)
		addbackdrop()
	}

	function addbackdrop() {
		backdropdoc = backdropframe.contentWindow.document
		backdropdoc.open()
		backdropdoc.write(backdropsource)
		var markup =
			'<div id="iniframe"></div><style>body {overflow: hidden; -webkit-filter: blur(' +
			blur +
			'px);filter: blur(' +
			blur +
			'px); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}</style>'
		backdropdoc.write(markup)
		backdropdoc.close()
		if (scroller == 'yes') {
			window.addEventListener(
				'scroll',
				function(event) {
					var scroll = this.scrollY
					var scrollx = this.scrollX
					backdropframe.contentWindow.window.scrollTo(scrollx, scroll)
				},
				false
			)
		}
	}
}
