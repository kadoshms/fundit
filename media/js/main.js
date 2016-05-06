requirejs.config({
  paths: {
	  'backbone'		:	'vendor/backbone/backbone-min',
	  'jquery'			:	'vendor/jquery/dist/jquery.min',
	  'underscore'		:	'vendor/underscore/underscore-min',
	  'text'			:	'vendor/requirejs-plugins/lib/text',
	  'snap'			:	'vendor/snap.svg/dist/snap.svg-min',
	  'mustache'		:	'vendor/mustache/mustache.min',
	  'backbone-validation'	:	'vendor/backbone-validation/dist/backbone-validation-amd-min'
  },
  shim: {
		'backbone':{
			deps:["underscore","jquery"],
			exports: "Backbone"
		},
	  	'mustache':{
	  		exports : "Mustache"
	  	},
	  	'underscore':{
	  		deps	:	["jquery"],
	  		exports	:	"_"
	  	}
  }
});

requirejs([
  'app',
  'underscore',
], function(App){
  App.initialize();
});