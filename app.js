var express = require('express');
var jadeStatic = require('connect-jade-static');
var path = require('path');
var app = express();

// change to public, this is to send the error pages.
app.set('views', __dirname + '/public')
app.set('view engine', 'jade')


// Don't need the following because connect-jade-static is going to take care of it.)
// app.use(express.static(__dirname + 'public'));

// All you have to do to connect to the connect-jade-static
// object is include the 
// baseDic - where the files are coming from.
// and
// baseUrl - the base URL you want to serve these files into.
app.use(jadeStatic({
	baseDir: path.join(__dirname, '/public'),
	baseUrl: '/',
	jade: { pretty: true }
}));


//
app.use(function(req, res) {
	res.status(400);
	res.render('404.jade', {title: '404: File Not Found'});
});

module.exports = app;