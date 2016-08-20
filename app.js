// Running app

var express = require('./config/express');

/* ~~~~ Instantiate express server ~~~~ */
var app = express();

/* ~~~~ Setting up server port ~~~~ */
app.set('port', (process.env.PORT || 1337));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
