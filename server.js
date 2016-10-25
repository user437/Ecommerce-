var express = require('express');
var morgan = require('morgan');    //morgan is a tracker...adds information into the terminal
var app = express();


app.use(morgan('dev'));     //Middleware


app.get('/', function(req, res) {
  var name = "user";
  res.json("my name is " + name);
});

app.get('/catname', function(req, res) {
res.json('user');
});

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("Server is running on port 3000");
});






