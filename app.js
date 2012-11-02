/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes/index')
  , users = require('./routes/users')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/add', routes.index);
app.get('/list', routes.index);
app.get('/edit/*', routes.index);

app.get('/users', users.list);
app.post('/users', users.add);
app.get('/users/:id', users.get);
app.put('/users/:id', users.edit);
app.delete('/users/:id', users.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
