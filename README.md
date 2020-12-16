# LAB: Scrape Books

In this lab you'll scrape a website and print the data you scrape to the terminal.

## Scrapper

### request.js

Write a `lib/request.js` file and **DON'T** write `__tests__/request.test.js` file. You should export a function
from the file that makes a request to the [Books to Scrape](http://books.toscrape.com/) site and
returns a promise that resolves with a `document`.

### parser.js

Write a `lib/parser.js` file. You should export a function
from the file that takes a `document`. The function should find all books in the `document` and
return an array of those books. Each book object should include the books title, cover image,
rating, price, and a boolean indicating if it is in stock.

### store.js

Write a `lib/store.js` file. You should export a function
from the file that takes an array of books and stores each book in a postgres database. 

### scraper.js

Write a `lib/scraper.js` file (no need for a test). Use your `request` function, `parser` function,
and `store` function in combination to store an array of books by scraping the
[Books to Scrape](http://books.toscrape.com/) site. Once complete `console.log` the number of books
processed.

## Rubric

* `request.js` 3 points
* `parser.js` 3 points
* `store.js` 3 points
* `scraper.js` 1 points