var express = require('express');
var os = require("os")
var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get("/whoami", function (req, res) {
  var result ={
    IP_address : req.headers['x-forwarded-for'].split(",")[0],
    Language : req.headers['accept-language'].split(",")[0],
    Software : req.headers['user-agent'].split(" ").splice(1,5).join(" ").replace("(", "").replace(")", "")
  }
  res.json(result)
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

