const parse = document => {
  const products = document.querySelectorAll('.product_pod');

  return [...products].map(product => ({
    name: product.querySelector('h3').textContent,
    imgUrl: product.querySelector('img').src,
    rating: product.querySelector('.star-rating').classList.item(1),
    price: product.querySelector('.price_color').textContent,
    inStock: !product.querySelector('.icon-okay')
  }));
};

module.exports = parse;
