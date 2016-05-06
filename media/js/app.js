// Filename: app.js
define([
  'jquery',
  'backbone',
  'views/main',
  'routes'
], function($, Backbone, Main, Routes){
	
	 Backbone.history.start({
		 pushState: true
	 });
  var initialize = function(){
	  var main = new Main.View();
	  main.render();
  }

  return {
    initialize: initialize,
    routes: new Routes()
  };
});
