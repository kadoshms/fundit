define([
         'jquery',
         'backbone',
         'mustache',
         'classes/campaign',
         'text!templates/campaign/project_det.mustache',
         'stickit'
], function($, Backbone, Mustache, Campaign, Template){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'click #next-btn'	:	'next'
		},
		bindings:{
			'#inputTitle'			: 'title',
			'#inputSubTitle'		: 'subtitle',
			'#inputMedia'			: 'media',
			'#inputDesc'			: 'desc'
		},
		initialize: function(){
			this.model = new Campaign.Model();
		},
		next:	function(){
			this.model.save().done(function(){
				console.log(Backbone.history)
				Backbone.history.navigate('campaign/create/products', {trigger:true});
			});
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {}));
			return this;
		}
	});

	return exports;
	
});