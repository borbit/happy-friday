ns.Views.User = Backbone.View.extend({
  events: {
    'click button': 'save'
  , 'keypress input': 'reset'
  },

  initialize: function() {
    this.tpl = $('#tpl_user').html();
    this.tpl = _.template(this.tpl);
    this.render();

    var self = this;

    this.model.on('error', function(model, error) {
      self.reset();

      self.$el.find('.error').html(error);
      self.$el.find('.error').show();
    });
  },

  render: function() {
    var json = this.model.toJSON();
    var html = this.tpl(json);
    this.$el.html(html);
  },

  reset: function() {
    var $button = this.$el.find('button');
    var $error = this.$el.find('.error')
      
    $button.removeAttr('disabled');
    $button.html('Edit');

    $error.html();
    $error.hide();
  },

  save: function() {
    var $button = this.$el.find('button');

    var data = {
      firstname: $.trim(this.$el.find('input[name="firstname"]').val())
    , lastname: $.trim(this.$el.find('input[name="lastname"]').val())
    };

    $button.attr('disabled', true);
    $button.html('Loading...');

    this.model.save(data, {success: function() {
      $button.html('Saved!');
    }});
  }
});