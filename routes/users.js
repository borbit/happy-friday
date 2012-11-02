var users = [];
var lastId = 0;

exports.list = function(req, res){
  res.json(users);
};

exports.add = function(req, res){
  var user = {
    firstname: req.body.firstname
  , lastname: req.body.lastname
  , id: lastId++
  };
  users.push(user);
  res.json(user);
};

exports.get = function(req, res){
  for (var i = users.length; i--;) {
    if (users[i].id == req.params.id) {
      res.json(users[i]);
      break;
    }
  }
};

exports.edit = function(req, res){
  var user;
  for (var i = users.length; i--;) {
    if (users[i].id == req.params.id) {
      user = users[i];
      break;
    }
  }
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  res.json(user);
};

exports.delete = function(req, res){
  for (var i = users.length; i--;) {
    if (users[i].id == req.params.id) {
      users.splice(i, 1);
      break;
    }
  }
  res.end();
};