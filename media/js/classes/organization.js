define([
        'jquery',
        'backbone',
        'classes/config',
        'text!templates/campaign/new_organization.mustache'
], function($, Backbone, config, Template){
	var exports = {};

	exports.Model = Backbone.Model.extend({
		url	:	config.api+'organizations'
	});
	
	return exports;
});