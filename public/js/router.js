ns.Router = Backbone.Router.extend({
  routes: {
    ''         : 'list'
  , 'list'     : 'list'
  , 'add'      : 'add'
  , 'edit/:id' : 'edit'
  },

  initialize: function() {
    this.$viewport = $('#viewport');
    this.collection = new ns.Collections.Users();
    this.collectionView = new ns.Views.Users({
      collection: this.collection
    });

    var self = this;

    this.collectionView.on('button:add', function() {
      self.navigate('/add', {trigger: true});
    });

    this.collectionView.on('button:edit', function(id) {
      self.navigate('/edit/' + id, {trigger: true});
    });
  },

  list: function() {
    this.collection.fetch();
    this.$viewport.empty();
    this.$viewport.append(this.collectionView.el);
  },

  add: function() {
    var model = new ns.Models.User();
    var modelView = new ns.Views.User({
      model: model
    });

    var self = this;

    modelView.on('save', function() {
      self.navigate('/list', {trigger: true});
    });
    
    this.$viewport.empty();
    this.$viewport.append(modelView.el);
  },

  edit: function(id) {
    var model = new ns.Models.User({id: id});
    var modelView = new ns.Views.User({
      model: model
    });

    model.fetch();

    var self = this;

    modelView.on('save', function() {
      self.navigate('/list', {trigger: true});
    });
    
    this.$viewport.empty();
    this.$viewport.append(modelView.el);
  }
});
