// Filename: app.js
define([
  'jquery',
  'backbone',
  'views/main',
  'routes',
  'view_manager'
], function($, Backbone, Main, Routes, ViewManager){
  var initialize = function(){
	  var app_router = new Routes();
      Backbone.history.start();
      return app_router;
  }

  return {
    initialize: initialize
  };
});
