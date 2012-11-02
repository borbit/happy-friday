var users = [];
var lastId = 0;

exports.list = function(req, res){
  res.json(users);
};

exports.add = function(req, res){
  var user = {
    firstname: req.body.firstname
  , lastname: req.body.lastname
  , id: lastId
  };

  users[lastId++] = user;

  res.json(user);
};

exports.get = function(req, res){
  res.send("get");
};

exports.edit = function(req, res){
  res.send("edit");
};

exports.delete = function(req, res){
  res.send("delete");
};