// ### parser.js

// Write a `lib/parser.js` file. You should export a function
// from the file that takes a `document`. The function should find all books in the `document` and
// return an array of those books. Each book object should include the books title, cover image,
// rating, price, and a boolean indicating if it is in stock.
const parse = document => {
  const products = document.querySelectorAll('.grouped-item');

  return [...products].map(product => ({
    name: product.querySelector('.item-name').textContent,
    price: product.querySelector('.price').textContent,
  }));
};

module.exports = parse;
