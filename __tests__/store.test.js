const fs = require('fs');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const Book = require('../lib/store');

describe('book routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a book via POST', () => {
    return request(app)
      .post('/api/v1/books')
      .send({
        name: 'Olio',
        imgUrl: 'media/cache/55/33/553310a7162dfbc2c6d19a84da0df9e1.jpg',
        rating: 'One',
        price: '£23.88',
        inStock: true
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          name: 'Olio',
          imgUrl: 'media/cache/55/33/553310a7162dfbc2c6d19a84da0df9e1.jpg',
          rating: 'One',
          price: '£23.88',
          inStock: true
          
        });
      });
  });

  it('recieves all books via GET', async() => {
    const books = await Promise.all([
      {
        name: 'Mesaerion: The Best Science ...',
        imgUrl: 'media/cache/09/a3/09a3aef48557576e1a85ba7efea8ecb7.jpg',
        rating: 'One',
        price: '£37.59',
        inStock: true
      },
      {
        name: 'Libertarianism for Beginners',
        imgUrl: 'media/cache/0b/bc/0bbcd0a6f4bcd81ccb1049a52736406e.jpg',
        rating: 'Two',
        price: '£51.33',
        inStock: true
      },
      {
        name: 'It\'s Only the Himalayas',
        imgUrl: 'media/cache/27/a5/27a53d0bb95bdd88288eaf66c9230d7e.jpg',
        rating: 'Two',
        price: '£45.17',
        inStock: true
      }
    ].map(book => Book.insert(book)));

    return request(app)
      .get('/api/v1/books')
      .then(res => {
        books.forEach(book => {
          expect(res.body).toContainEqual(book);
        });
      }); 
  });

  it('deletes a book by id via DELETE', async() => {
    const book = await Book.insert({
      name: 'Mesaerion: The Best Science ...',
      imgUrl: 'media/cache/09/a3/09a3aef48557576e1a85ba7efea8ecb7.jpg',
      rating: 'One',
      price: '£37.59',
      inStock: true
    });

    return request(app)
      .delete(`/api/v1/books/${book.id}`)
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          name: 'Mesaerion: The Best Science ...',
          imgUrl: 'media/cache/09/a3/09a3aef48557576e1a85ba7efea8ecb7.jpg',
          rating: 'One',
          price: '£37.59',
          inStock: true
        });
      });
  });
})
;
