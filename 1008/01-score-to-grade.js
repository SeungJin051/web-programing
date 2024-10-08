let score = 60;

let grade_score = Math.floor(score / 5);
let grade_str = '';
switch (grade_score) {
	case 20:
	case 19:
		grade_str += '+'; // 소분류 + 추가
	// grade_score[1] = '+';
	case 18:
		grade_str = 'A' + grade_str; // 대분류 학점
		// grade_score[2] = 'A';
		break;
	case 17:
		grade_str += 'B+';
	case 16:
		grade_str = 'B' + grade_str;
		break;
	case 15:
		grade_str += 'C+';
	case 14:
		grade_str = 'C' + grade_str;
		break;
	case 13:
		grade_str += 'D+';
	case 12:
		grade_str = 'D' + grade_str;
		break;
	default:
		grade_str = 'F';
		break;
}

console.log(score + ' = ' + grade_str);
