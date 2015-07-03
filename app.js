var express = require('express');
var app = express();
var Logger = require('le_node');
var log = Logger({
  token:process.env.logentries_token
});

app.get('/', function(req, res){

  // level specific methods like 'info', 'debug', etc.
  log.info("I'm a Lumberjack and I'm OK")

  // generic log method, also accepts JSON entries
  log.log("debug", {sleep:"all night", work:"all day"})

  res.send(‘created 2 logs’);
});

app.listen(process.env.PORT || 4000, function(){
  console.log('server listening on port ' + app.get('port'));
});

console.log("App start");
