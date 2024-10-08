// 시험문제?
var change = 28630;

var COIN = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
var nCoins = new Array();

for (let i = 0; i < COIN.length; i++) {
	let n = Math.floor(change / COIN[i]);
	nCoins.push(n);
	change %= COIN[i];
	if (nCoins[i] != 0) console.log(`${COIN[i]} : ${nCoins[i]}개`);
}
