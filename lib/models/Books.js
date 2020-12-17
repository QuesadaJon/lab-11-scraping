const pool = require('../utils/pool');

module.exports = class Book {
  id;
  name;
  imgUrl;
  rating;
  price;
  inStock;

  constructor(row) {
    this.id = String(row.id);
    this.name = row.name;
    this.imgUrl = row.img_url;
    this.rating = row.rating;
    this.price = row.price;
    this.inStock = row.in_stock;
  }

  static async insert({ name, imgUrl, rating, price, inStock }) {
    const { rows } = await pool.query(`
    INSERT into books (name, img_url, rating, price, in_stock) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *`,
    [name, imgUrl, rating, price, inStock]
    );
    
    return new Book(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM books'
    );

    return rows.map(row => new Book(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM books WHERE id=$1 RETURNING *',
      [id]
    );

    return new Book(rows[0]);
  }
};
