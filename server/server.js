var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');

var router = require('./routes');

// create new app...
var app = express();
module.exports.app = app;

// listen on...
app.set('port', 2727);

// logging and parsing...
app.use(morgan('dev'));
app.use(parser.json());// parses json data.

app.use('/api', router);

// confirms the server is being listened too.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('listening on', app.get('port'))
}