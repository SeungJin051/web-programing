var month = 2;
var season = Math.floor(((month + 9) % 12) / 3);

var month_srt;
switch (season) {
	case 0:
		month_srt = '봄';
		break;
	case 1:
		month_srt = '여름';
		break;
	case 2:
		month_srt = '가을';
		break;
	case 3:
		month_srt = '겨울';
		break;
	default:
		break;
}

console.log(month + ' = ' + month_srt);
