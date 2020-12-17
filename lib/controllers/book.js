const { Router } = require('express');
const Book = require('../models/Books');

module.exports = Router()

  .post('/', async(req, res) => {
    Book
      .insert(req.body)
      .then(book => res.send(book));
  })

  .get('/', (req, res) => {
    Book
      .find()
      .then(book => res.send(book));
  })

  .delete('/:id', (req, res) => {
    Book
      .delete(req.params.id)
      .then(book => res.send(book));
  })
;
