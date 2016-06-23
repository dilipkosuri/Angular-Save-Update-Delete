/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.intro = element(by.css('.intro'));
  this.title = this.intro.element(by.css('h1'));
  this.description = this.intro.element(by.css('p'));
  this.image = this.intro.element(by.css('img'));
};

module.exports = new MainPage();
