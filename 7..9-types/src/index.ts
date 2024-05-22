let restrictedValue: 1 | 2 | 3 = 3;
// let restrictedValue: 1 | 2 | 3 = 100;

let secondValue: 1 | 10 | 100 = 1;

restrictedValue = secondValue;
secondValue = 100;
restrictedValue = secondValue;

console.log(`Value: ${restrictedValue}`);
