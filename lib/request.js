// ### request.js

// Write a `lib/request.js` file and **DON'T** write `__tests__/request.test.js` file. You should export a function
// from the file that makes a request to the [Books to Scrape](http://books.toscrape.com/) site and
// returns a promise that resolves with a `document`.
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async() => {
  const response = await fetch('http://books.toscrape.com/');
  const html = await response.text();

  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
