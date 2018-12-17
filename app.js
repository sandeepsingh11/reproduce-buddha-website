var express = require('express');
var app = express();
var server = require('http').Server(app);

const port = process.env.PORT || 8080;



// set pug as template engine
app.set('view engine', 'pug');
app.set('views','./views');

// on home page, serve index.pug
app.get('/', function (req, res) {
  res.render('index', { title: 'Vue Pug', message: 'Hewwo!' })
})

// set route to images folder
app.use(express.static('img'));


server.listen(port, function(){
	console.log('listening on ' + port);
});