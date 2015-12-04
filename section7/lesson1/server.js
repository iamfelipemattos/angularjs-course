var express    = require('express');
var app          = express();
var path         = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'index.html')));

app.listen(8000);
console.log('Listening on port 8000');