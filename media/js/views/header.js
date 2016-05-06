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
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {}));
			return this;
		}
	});
	
	return exports;
});