define([
        'jquery',
        'backbone',
        'mustache',
        'text!templates/campaign/view_campaign.mustache',
], function($, Backbone, Mustache , Template){
	
	var exports = {};
	
	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'blur #inputKeyword' : 'search'
		},
		initialize: function(){
		},
		render	:	function(){
			console.log("render")
			this.$el.html(Mustache.to_html(Template, {}));
			return this;
		}
	});
	
	return exports;
	
});