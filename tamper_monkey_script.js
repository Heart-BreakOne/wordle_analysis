// ==UserScript==
// @name         Remove Footer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the footer.
// @author       HeartBreakOne
// @match        https://www.nytimes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    new MutationObserver(() => {
        const footer = document.getElementById('standalone-footer');
        if (footer) {
            footer.remove();
        }
    }).observe(document.body, { childList: true, subtree: true });
})();