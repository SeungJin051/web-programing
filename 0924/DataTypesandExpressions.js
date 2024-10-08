var str1 = 'Hello'; // 길이 5
var str2 = '안녕하세요'; // 길이 5

console.log(str1.length);
console.log(str2.length);

// str1 =  5bytes
// str2 = 15bytes

// str1 += ' World!';

// console.log(str1);

var a = 0.1;
var b = '0.1';

console.log(typeof a);
console.log(typeof b);

var c = 'c' / a;

console.log(c); // 전역 NaN 속성은 Not-A-Number(숫자가 아님)를 나타냅니다.
console.log(typeof c);

var d = b / a; // 숫자로 파싱 가능한 문자열은 atoi, astod 계열 함수가 자동 호출 (연잔자 오버로딩)

console.log(d);

var byteLenght1 = new TextEncoder().encode(str1).length;
console.log(byteLenght1);

var byteLength2 = new TextEncoder().encode(str2).length;
console.log(byteLength2);

var str3 = 'I said "Stop!"';
console.log(str3);

var str4 = "I said 'Stop'!";
console.log(str4);

// **
let flag = str3.length == str4.length;
console.log(flag);

let flag1 = null > str4.length;
console.log(flag1);

let flag2 = null < str4.length;
console.log(flag2);

console.log(typeof null); // null -> 0을 가르킴
console.log(typeof undefined); // undefined -> 정의되지 않음, 없음
// **

console.log(Boolean(null));
console.log(Number(Boolean(str4.length)));

let psn = {
	name: '임승진',
	age: 24,
	isFemale: false,
	height: 177,
	weight: 62.0,
};

psn.weight -= 1.2; // 멤버 변수 접근 방법
console.log(psn.weight);

psn['age'] -= 1; // 해싱 문법 이용
console.log(psn['age']);

var input;
input = input == undefined ? 0 : input;

// 왼쪽 피연산자가 undefined이거나 null이면 오른쪽 값을 써라
input = input ?? 0; // nullish coalsceing
