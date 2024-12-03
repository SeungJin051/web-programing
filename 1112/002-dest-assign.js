// 해체 / 할당
const numbers = [1, 2, 3, 4, 5, 6, 7];

let [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);

let number2 = [8, 9];

let [x, y, ...r] = number2;
console.log(x);
console.log(y);
console.log(r);

// use set
let set1 = new Set([2, 3, 1]);
set1 = new Set([...set1].sort((a, b) => a - b));
console.log(set1);

let set2 = new Set([6, 3, 7, 5, 4]);
set2 = new Set([...set2].sort((a, b) => a - b));
console.log(set2);

// let set3 = new Set(...set1, ...set2);
// set3 = new Set([...set3].sort((a, b) => a - b));
// console.log(set3);
