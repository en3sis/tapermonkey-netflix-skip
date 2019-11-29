// ==UserScript==
// @name         Skip Netflix intro.
// @version      0.1
// @description  Skips intro for shows. You can add shows to an whitelist if you don't want those intros to be skiped.
// @author       @en3sis
// @match       https://www.netflix.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  /**
   * You can add shows in the whitlist by ID.
   * The ID is the numeric sequence after the /watch/THIS_STRING when you play an episode.
   */
  const whiteList = [
    {
      name: 'Family Guy',
      id: '80997392'
    }, {
      name: 'Big Mouth',
      id: '80241183'
    }
  ]

  setInterval(() => {
    const target = document.querySelector(".skip-credits > a")

    if (typeof(target) != 'undefined' && target != null) {
      const anyMatch = whiteList.filter(ele => `/watch/${ele.id}` === window.location.pathname)
      anyMatch.length === 0 ? target.click() : ''
    }
  }, 2000)
})();