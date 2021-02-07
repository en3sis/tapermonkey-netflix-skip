// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shows total playlist
// @author       en3sis
// @match https://www.youtube.com/playlist*

// @grant        none

// ==/UserScript==

(function () {
  'use strict';

  const getTotalTime = () => {
    const regex = /(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)(?:[000-999])/gm
    let labels = Array.from(document.querySelectorAll('.ytd-thumbnail-overlay-time-status-renderer')).filter(ele => ele.textContent)

    const splitItems = labels.map(item => {
      return item.textContent.match(regex)
    }).map(ele => ele[0].split(':'))

    let min = 0
    let sec = 0

    splitItems.forEach(item => {
      min = min + parseInt(item[0])
      sec = sec + parseInt(item[1])
    })

    const totalMin = Math.floor(min + Math.min(sec) / 60)

    function timeConvert (n) {
      const num = n;
      const rhours = Math.floor((num / 60))
      const rminutes = Math.round((hours - rhours) * 60);
      return `Playlist total: ${rhours}:${rminutes}:${Math.round(sec > 60 ? sec / 60 : sec)}`
    }

    console.log(timeConvert(totalMin));

    const div = document.createElement('div');
    div.style.cssText = `position: fixed;
z-index: 999;
width: auto;
bottom: 10px;
right: 10px;
background-color: black;
color: #fff;
padding: 20px;
font-size: 14px;`;
    div.innerHTML = timeConvert(totalMin);

    return document.body.appendChild(div);
  }
  setTimeout(getTotalTime, 1200)

})();
