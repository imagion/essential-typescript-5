let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = '100';
console.log(`Boots price: ${bootsPrice}`);

let taxRate; // no tax rate has been defined
console.log(`Tax rate: ${taxRate ?? 10}%`);
taxRate = 0; // zero-rated for tax
console.log(`Tax rate: ${taxRate ?? 10}%`);

if (hatPrice === bootsPrice) {
  console.log('Prices are the same');
} else {
  console.log('Prices are different');
}

let sumPrices = (...numbers) =>
  numbers.reduce(
    (total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)),
  );

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
