/**
 * Author: AhsanEjaz
 * Twitter: https://twitter.com/AhsanEjazA
 * GitHub: https://github.com/AhsanE
 * License: MIT
 */

/**
 * @param {DOMElement} backdropsource
 * @param {DOMElement} backdropapply
 * @param {number} filter
 * @param {boolean} scroller
 */
function backdrop(backdropsource, backdropapply, filter, scroller) {
    let backdropframe; // reserved variable
    if (document.getElementById('iniframe') == null) {
        backdropframe = document.createElement('iframe');
        backdropframe.style.border = 'none';
        backdropframe.width = '100%';
        backdropframe.height = '100%';
        backdropapply.appendChild(backdropframe);
        addbackdrop();
    }

    function addbackdrop() {
        const backdropdoc = backdropframe.contentWindow.document;
        backdropdoc.open();
        backdropdoc.write(backdropsource);
        let markup = `<div id="iniframe"/>body{overflow:hidden;-webkit-filter:${filter};filter:${filter};-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none; user-select:none;}</style>`;
        backdropdoc.write(markup);
        backdropdoc.close();
        if (scroller) {
            window.addEventListener(
                'scroll',
                function(event) {
                    let scroll = this.scrollY;
                    let scrollx = this.scrollX;
                    let rect = backdropapply.getBoundingClientRect();
                    scroll = scroll - rect.top;
                    backdropframe.contentWindow.window.scrollTo(
                        scrollx,
                        scroll
                    );
                },
                true
            );
        }
    }
}
