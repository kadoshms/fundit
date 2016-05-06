define([
   'jquery',
   'backbone',
   'classes/config'
], function($, Backbone, config){
	
	var exports = {};
	
	exports.Collection = Backbone.Collection.extend({
		url	: config.api+'ebay_getbykeyword'
	});

	return exports;
	
});