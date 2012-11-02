ns.Views.Users = Backbone.View.extend({
  events: {
    'click .add': 'add'
  , 'click .edit': 'edit'
  , 'click .del': 'del'
  },

  initialize: function() {
    this.tpl = $('#tpl_users').html();
    this.tpl = _.template(this.tpl);
    this.render();

    var self = this;
    
    this.collection.on('reset', function() {
      self.render();
    });
    this.collection.on('remove', function() {
      self.render();
    });
  },

  render: function() {
    var json = this.collection.toJSON();
    var html = this.tpl({users: json});
    this.$el.html(html);
    this.delegateEvents();
  },

  add: function(e) {
    this.trigger('button:add');
  },

  edit: function(e) {
    var id = $(e.target).data('id');
    this.trigger('button:edit', id);
  },

  del: function(e) {
    if (confirm('Are you sure?')) {
      var id = $(e.target).data('id');
      var model = this.collection.get(id);
      model.destroy();
    }
  }
});