const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const port = 8080;
const app = express();

const users = {};

// app.use((req, res, next) => {
// 	const ts = new Date().toISOString;
// 	console.log(`[${ts}] ${req.method} ${req.url}`);
// 	next();
// });

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, './')));

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, './', '02-res-front.html'));
// });
// // app.get('/about');
// app.get('/users', (req, res) => {
// 	res.json(users);
// });
// app.post('/user', (req, res) => {
// 	const id = Date.now().toString();
// 	users[id] = name;
// 	res.status(201).json({ message: 'User added', id });
// });

// app.put('/user/:id', (req, res) => {
// 	const { id } = req.params;
// 	const { name } = req.body;

// 	if (users[id]) {
// 		users[id] = name;
// 		res.json({ message: 'user update' });
// 	} else {
// 		res.status(404).json({ message: 'user not found' });
// 	}
// });
// app.delete('/user/:id', (req, res) => {
// 	const { id } = req.params;
// 	const { name } = req.body;

// 	if (users[id]) {
// 		delete users[id];
// 		res.json({ message: 'user deleted' });
// 	} else {
// 		res.status(404).json({ message: 'user not found' });
// 	}
// });
// app.listen(port, () => {
// 	console.log(`Serer is on ${port}`);
// });

// const express = require('express');

// const bodyParser = require('body-parser');
// const path = require('path');

// const port = 8080;
// const app = express();

// // 사용자 데이터를 저장할 객체
// const users = {};

// 요청 로그 미들웨어
app.use((req, res, next) => {
	const timestamp = new Date().toISOString();
	console.log(`[${timestamp}] ${req.method} ${req.url}`);
	next();
});

// 미들웨어 설정
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));

// HTML 파일을 제공
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './', '02-rest-front.html'));
});

// 모든 사용자 조회
app.get('/users', (req, res) => {
	res.json(users);
});

// 사용자 추가
app.post('/user', (req, res) => {
	const { name } = req.body;
	const id = Date.now().toString();
	users[id] = name;
	res.status(201).json({ message: 'User added', id });
});

// 사용자 수정
app.put('/user/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	if (users[id]) {
		users[id] = name;
		res.json({ message: 'User updated' });
	} else {
		res.status(404).json({ message: 'User not found' });
	}
});

// 사용자 삭제
app.delete('/user/:id', (req, res) => {
	const { id } = req.params;
	if (users[id]) {
		delete users[id];
		res.json({ message: 'User deleted' });
	} else {
		res.status(404).json({ message: 'User not found' });
	}
});

// 서버 시작
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
