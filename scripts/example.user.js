// ==UserScript==
// @name         Example Script - YouTube Ad Skipper
// @namespace    axisuser
// @version      1.0
// @description  Example Tampermonkey-compatible script for AxisUser Chrome
// @author       AxisUser
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    console.log('[AxisUser] Example script loaded on YouTube');

    // Auto-skip YouTube ads
    function skipAds() {
        const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
        if (skipBtn) {
            skipBtn.click();
            console.log('[AxisUser] Skipped ad');
        }

        // Speed up video ads
        const video = document.querySelector('video');
        if (video && video.duration && video.classList.contains('ad-showing')) {
            video.playbackRate = 16;
        }
    }

    setInterval(skipAds, 1000);
})();
