var inner = 0;
var total = 10;

for (let i = 0; i < total; i++) {
	var x = Math.random(); // 0 ~ 1 사이가 나오는 균등 분포
	var y = Math.random(); // 0 ~ 1 사이가 나오는 균등 분포}

	if (x ** 2 + y ** 2 < 1) {
		inner++;
	}
}

var est_pi = (inner / total) * 4;
var real_pi = Math.PI; // atan(1);

console.log(
	`#tot ${total} + estimated PI = ${est_pi}, err = ${Math.abs(est_pi - real_pi)}`,
);
