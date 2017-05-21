var express = require('express');
var bodyparser = require('body-parser');

// var connect = require('connect');
// var serveStatic = require('serve-static')

var pub = __dirname;


var app = express();

//setup middleware
app.use(express.static(pub));
app.use('/views', express.static(__dirname + '/views'))
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/db', express.static(__dirname + '/db'));
app.use('/js', express.static(__dirname + '/js'));

//view engine
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index')
})

app.use(function(err, req, res, next) {
  res.send(err.stack);
});


		// connect().use(serveStatic(__dirname)).listen(5000, function(){
		// 	console.log('Server is running on 5000	')
		// })

if (!module.parent) {
  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Express started on port 3000');
}
