ns.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  defaults: {
    firstname: ''
  , lastname: ''
  },

  validate: function(attrs) {
    if (attrs.firstname.length == 0) {
      return 'Firstname is absent';
    }
    if (attrs.lastname.length == 0) {
      return 'Lastname is absent';
    }
  }
});