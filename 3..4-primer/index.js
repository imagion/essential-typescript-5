import calcTax from './tax.js';

class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let product = new Product('Hat', 100);
let taxedPrice = calcTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);
