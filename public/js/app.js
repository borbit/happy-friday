$(function() {
  var $viewport = $('#viewport');

  var collection = new ns.Collections.Users();
  var collectionView = new ns.Views.Users({
    collection: collection
  });

  collection.fetch();

  var model = collection.create({
    firstname: 'Serge'
  , lastname: 'Borbit'
  });

  var modelView = new ns.Views.User({
    model: model
  });

  $viewport.append(collectionView.el);
  $viewport.append(modelView.el);
});