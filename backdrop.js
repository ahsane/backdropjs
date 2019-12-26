/**
 * Author: AhsanEjaz
 * Twitter: https://twitter.com/AhsanEjazA
 * GitHub: https://github.com/AhsanE
 * License: MIT
 */

/**
 * @param {DOMElement} backdropsource
 * @param {DOMElement} backdropapply
 * @param {number} blur
 * @param {boolean} scroller
 */
function backdrop(backdropsource, backdropapply, blur, scroller) {
    let backdropframe // reserved variable
    if (document.getElementById('iniframe') == null) {
        backdropframe = document.createElement('iframe')
        backdropframe.style.border = 'none'
        backdropframe.width = '100%'
        backdropframe.height = '100%'
        backdropapply.appendChild(backdropframe)
        addbackdrop()
    }

    function addbackdrop() {
        const backdropdoc = backdropframe.contentWindow.document
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
        if (scroller) {
            window.addEventListener(
                'scroll',
                function(event) {
                    var scroll = this.scrollY
                    var scrollx = this.scrollX
                    var rect = backdropapply.getBoundingClientRect();
                    scroll = scroll - rect.top;
                    backdropframe.contentWindow.window.scrollTo(scrollx, scroll)
                },
                true
            )
        }
    }
}
