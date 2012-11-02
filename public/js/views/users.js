ns.Views.Users = Backbone.View.extend({
  initialize: function() {
    this.tpl = $('#tpl_users').html();
    this.tpl = _.template(this.tpl);
    this.render();

    var self = this;

    this.collection.on('reset', function() {
      self.render();
    })
  },

  render: function() {
    var json = this.collection.toJSON();
    var html = this.tpl({users: json});
    this.$el.html(html);
  }
});