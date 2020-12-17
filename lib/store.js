const Book = require('./models/Books');

// Write a `lib/store.js` file. You should export a function
// from the file that takes an array of books and stores each book in a postgres database. 


const store = async(booksStore) => {
  
  const booksArr = await Promise.all(booksStore.map(book => Book.insert(book)));

  return booksArr;
};

module.exports = store;
