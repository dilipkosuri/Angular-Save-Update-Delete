'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/#/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.title.getText()).toBe('Welcome to the AngularJS Code Challenge');
    expect(page.description.getText()).toBe('This is the boilerplate project for the Angular JS challenge');
    expect(page.image.getAttribute('src')).toMatch(/assets\/images\/savedo.svg$/);
  });
});
