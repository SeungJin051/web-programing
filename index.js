var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(5000, function () {
	console.log('Express app port 5000');
});
