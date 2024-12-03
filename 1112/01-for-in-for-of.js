const fruits = ['수박', '오렌지', '사과', '키위'];

console.log('My favorite fruits list');
for (let i = 0; i < fruits.length; i++) {
	console.log(`${i} = ${fruits[i]}`);
}

for (let x in fruits) {
	console.log(`${x}: ${fruits[x]}`);
}

for (let x of fruits) {
	console.log(`${x}`);
}

console.log('\n\n\n');

let person = {
	name: '김승인',
	age: 23,
	favorite: 'capybara',
	isMale: false,
	nickname: `${fruits[0]}을 좋아하는 승인씨`,
};

console.log('My favorite person is...');
for (let key in person) {
	console.log(`${key}: ${person[key]}`);
}

console.log('My favorite person is...');
for (let value of Object.values(person)) {
	console.log(`${value}`);
}

console.log('My favorite person is...');
for (let [key, val] of Object.entries(person)) {
	console.log(`${key} : ${val}`);
}
