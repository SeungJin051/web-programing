let a = 7;
let b = 3;
let c = a / b;
console.log(a + ' % ' + b + ' = ' + Math.floor(a / b) + ' ... ' + (a % b));

console.log(`${a} % ${b} = ${Math.floor(a / b)} ... ${a % b}`);

console.log(`${a} % ${b} = ${c.toFixed(2)}`);

console.log(`${a} % ${b} = ${c.toPrecision(6)}`);
