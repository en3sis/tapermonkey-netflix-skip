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

    let labels = [...document.querySelectorAll("ytd-thumbnail-overlay-time-status-renderer > span")]

    labels
    .reduce((acc, dur) => {
        dur = dur.textContent.trim().split(':');
        return acc + parseInt(dur[0]) * 60 + parseInt(dur[1]);
      }, 0) / 60;

    const div = document.createElement('div');
    div.style.cssText = `osition: fixed;
z-index: 999;
width: auto;
bottom: 10px;
right: 10px;
background-color: #f00;
color: rgb(255, 255, 255);
padding: 15px;
font-size: 14px;
border-radius: 50px;
font-weight: bold;
border: 3px solid #9e1212;`;
    div.innerHTML = `${Math.floor((labels / 60) + " hours " + minutes % 60 + " minutes.")}`;

    return document.body.appendChild(div);
  }
  setTimeout(getTotalTime, 1200)

})();
