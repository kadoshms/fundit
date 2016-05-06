define([
   'jquery',
   'backbone',
   'classes/config'
], function($, Backbone, config){
	
	var exports = {};
	
	exports.Collection = Backbone.Collection.extend({
//		url	: config.api+'ebay_getbykeyword'
		url	: 'media/mocks/products.json'
	});

	exports.Model = Backbone.Model.extend();
	return exports;
	
});