var express = require('express');
var cors = require('cors');

var app = express();

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: '*' }));

app.use(express.static('public'));

app.get("*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('App listen on port ' + listener.address().port);
});
