// Filename: app.js
define([
  'jquery',
  'backbone',
  'views/header',
  'routes',
  'view_manager'
], function($, Backbone, Header, Routes, ViewManager){
  var initialize = function(){
	  var app_router = new Routes();
      Backbone.history.start();
      
      // render header
      var header = new Header.View();
      $('#header').html(header.render().el);

      return app_router;
  }

  return {
    initialize: initialize
  };
});
