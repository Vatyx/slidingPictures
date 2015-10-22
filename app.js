var express = require('express');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

// jsdom.env(
//   '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
//   ["http://code.jquery.com/jquery.js"],
//   function (err, window) {
//     console.log("contents of a.the-link:", window.$("a.the-link").text());
//   }
// );
var lets;

request('https://www.google.com/search?q=green&oq=green&aqs=chrome.0.69i59j0l5.619j0j4&sourceid=chrome&es_sm=93&ie=UTF-8', function (error, response, body) {
  	$ = cheerio.load(body);
 //  	fs.writeFile(__dirname + "/outtest.html", $('ol'), function(err) {
	//     if(err) {
	//         return console.log(err);
	//     }
	//     console.log("The file was saved!");
	// });
	body2 = $('ol:not([id]):not([class])');
	//console.log(body2);
	$ = cheerio.load(body2.html());
	//console.log($.html());
	console.log($('h3.r').text());
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});