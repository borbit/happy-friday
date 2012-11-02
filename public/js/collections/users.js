ns.Collections.Users = Backbone.Collection.extend({
  model: ns.Models.User,
  url: '/users'
});