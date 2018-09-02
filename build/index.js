"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.replace");

if (typeof window === 'undefined') {
  var jsdom = require("jsdom");

  var JSDOM = jsdom.JSDOM;

  var _ref = new JSDOM(``),
      window = _ref.window;
}

'use strict'; // Inspired by the "Read Time" on Medium.org
// Sources regarding the stats:
// Eye Movements in Reading: Facts and Fallacies - Stanford E. Taylor (1965)
// norvig.com/mayzner.html


var _default = {
  methods: {
    /**
     * Not meant to be called publicly.
     * Calculate the reading time as a decimal.
     * @return {number} the decimal read time
     * @private
     */
    getReadTime: function getReadTime(article) {
      const averageWordsPerMinute = 248;
      const averageImageViewingTimeInMinutes = 1 / 6; // I couldn't find a study regarding images, so I apply an arbitrary number

      const averageWordLengthInCharacters = 4.79;
      var el = window.document.createElement('template');
      el.innerHTML = article;
      const root = el.content;
      const children = el.content.querySelectorAll('*');
      const text = root.textContent;
      const textLength = text.replace(/\s/g, '').length;
      const numWords = textLength / averageWordLengthInCharacters; // Words are variable length. Remove that factor.

      let numImages = 0;

      for (let child of children) {
        if (child.tagName.toLowerCase() === 'img' || child.style.backgroundImage !== '') {
          numImages++;
        }
      }

      const readingTime = Number(numWords / averageWordsPerMinute + numImages * averageImageViewingTimeInMinutes).toFixed(2);
      return readingTime;
    },

    /**
     * Calculate the read time of the string in seconds.
     * @param {string} - text in which to calculate read time
     * @return {number} the read time in seconds
     * @public
     */
    getReadTimeInSeconds: function getReadTimeInSeconds(article) {
      let readingTime = this.getReadTime(article);
      readingTime = Math.round(readingTime * 60);
      return readingTime;
    },

    /**
     * Calculate the read time of the string in minutes.
     * @return {number} the read time in minutes
     * @public
     */
    getReadTimeInMinutes: function getReadTimeInMinutes(article) {
      let readingTime = this.getReadTime(article);
      return readingTime;
    },

    /**
     * Form a string representation of the read time in seconds
     * @param {boolean} - whether to use short format or not (i.e. sec vs seconds)
     * @return {string} the string representation of the read time in seconds
     * @public
     */
    getReadTimeInSecondsString: function getReadTimeInSecondsString(article, short) {
      let readingTime = this.getReadTimeInSeconds(article);
      return readingTime + (short ? ' sec' : ' seconds');
    },

    /**
     * Form a string representation of the read time in minutes
     * @param {boolean} - whether to use short format or not (i.e. min vs minutes)
     * @return {string} the string representation of the read time in minutes
     * @public
     */
    getReadTimeInMinutesString: function getReadTimeInMinutesString(article, short) {
      let readingTime = this.getReadTimeInMinutes(article);
      return readingTime + (short ? ' min' : ' minutes');
    },

    /**
     * Form a string representation of the read time in minutes and seconds
     * @param {boolean} - whether to use short format or not (i.e. min, sec vs minutes, seconds)
     * @return {string} the string representation of the read time in minutes and seconds
     * @public
     */
    getReadTimeString: function getReadTimeString(article, short) {
      let readingTime = this.getReadTimeInSeconds(article);
      const min = Math.floor(readingTime / 60);
      const sec = readingTime % 60;

      if (short) {
        return min + ' min, ' + sec + ' sec';
      } else {
        return min + ' minutes, ' + sec + ' seconds';
      }
    },

    /**
     * Form a string representation of the read time (alternate)
     * The format is: 2 minutes, 2 and a half minutes, etc.
     * @return {string} the string representation of the read time (alternate)
     * @public
     */
    getReadTimeStringAlternate: function getReadTimeStringAlternate(article) {
      let readingTime = this.getReadTimeInSeconds(article);
      let min = Math.floor(readingTime / 60);
      let sec = readingTime % 60;
      sec = Math.round(sec / 30) * 30;

      if (sec === 30) {
        return min + ' and a half minutes';
      }

      if (sec === 60) {
        min++;
      }

      return min + ' minutes';
    }
  }
};
exports.default = _default;