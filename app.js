var express = require('express');
var app = express();

app.get('/', function(req, res){

  res.send('hello');
});

app.listen(process.env.PORT || 4000, function(){
  console.log('server listening on port ' + app.get('port'));
});

console.log("App start");
