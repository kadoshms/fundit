requirejs.config({
  paths: {
	  'backbone'		:	'vendor/backbone/backbone-min',
	  'jquery'			:	'vendor/jquery/dist/jquery.min',
	  'underscore'		:	'vendor/underscore/underscore-min',
	  'text'			:	'vendor/requirejs-plugins/lib/text',
	  'snap'			:	'vendor/snap.svg/dist/snap.svg-min',
	  'mustache'		:	'vendor/mustache/mustache.min',
	  'backbone-validation'	:	'vendor/backbone-validation/dist/backbone-validation-amd-min',
	  'stickit'			:	'vendor/backbone.stickit/backbone.stickit',
	  'bootsrap'		:	'vendor/bootstrap/dist/js/bootstrap.min',
	  'jquery-ui'		:	'vendor/jquery-ui/jquery-ui.min',
	  'highcharts'		:	'vendor/highcharts/highcharts',
	  'carousel'		:	'vendor/slick-carousel/slick/slick'
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
  'jquery-ui'
], function(App){
  App.initialize();
});