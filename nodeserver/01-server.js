const http = require('http');
const fs = require('fs').promises;
const port = 8080;

const server = http.createServer(async (req, res) => {
	try {
		// 파일 시스템 =  None blocking async await 처리로 Blocking 처리
		const data = await fs.readFile('01-server.html');
		res.writeHead(200, { 'Content-type': 'text/html; charset=utf--8' });
		res.end(data);
	} catch (err) {
		console.log(err);
		res.writeHead(500, { 'Content-type': 'text/html; charset=utf--8' });
		res.end(err);
	}
});

server.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});

server.on('error', error => {
	console.log(error);
});
