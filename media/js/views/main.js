define([
         'jquery',
         'backbone',
         'mustache',
         'classes/campaign',
         'text!templates/main.mustache'
], function($, Backbone, Mustache, Campaign, Template){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		el	: '#main-content',
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {}));
			return this;
		}
	});

	return exports;
	
});