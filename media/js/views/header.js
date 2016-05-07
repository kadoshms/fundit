define([
        'jquery',
        'backbone',
        'mustache',
        'text!templates/header.mustache',
        'scripts/login'
], function($, Backbone, Mustache, Template){
	var exports = {};
	
	exports.View = Backbone.View.extend({
		events	:	{
			'click #new-campaign' : 'newCampaign',
			'click #logo'		  : 'homePage'
		},
		newCampaign	:	function(){
			Backbone.history.navigate('campaign/create/new', {trigger:true});
		},
		homePage	:	function(){
			Backbone.history.navigate('/', {trigger:true});
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {}));
			return this;
		}
	});
	
	return exports;
});