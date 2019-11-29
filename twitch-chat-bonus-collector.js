// ==UserScript==
// @name         Twitch bonus collector
// @version      0.1
// @description  A script that will automaticly click in the claim bonus every 30s.
// @author       @en3sis
// @match       https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  setInterval(() => {
    /* Button selector */
    const target = document.querySelector(".claimable-bonus__icon")

    /* If target exist, click it! */
    target.length !== 0 ? target.click() : ''
  }, 30000)
})();