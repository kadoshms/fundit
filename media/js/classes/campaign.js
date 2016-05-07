define([
        'jquery',
        'backbone',
        'classes/config'
], function($, Backbone, config){
	var exports = {};

	exports.Model = Backbone.Model.extend({
		url	:	config.api+'campaign'
	});

	exports.Collection = Backbone.Collection.extend({
		url	:	config.api+'campaign'
	});

	return exports;
});