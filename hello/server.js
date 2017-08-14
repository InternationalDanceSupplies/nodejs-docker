var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/env', function (req, res) {
  res.send('The ENV is set to' + process.env.ENV);
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});
