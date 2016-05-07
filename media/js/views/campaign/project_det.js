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
			'#inputMedia'			: 'video',
			'#inputDesc'			: 'details',
			'#inputRaise'			: 'moneytoraise'
		},
		initialize: function(){
			this.model = new Campaign.Model();
		},
		next:	function(e){
			e.preventDefault();
			var campaign_id = parseInt(Math.random() * 10000);
			this.model.set({campaign_id : campaign_id});
			this.model.save().done(function(response){
				Backbone.history.navigate('campaign/create/products', {trigger:true});
			});
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {}));
			this.stickit();
			return this;
		}
	});

	return exports;
	
});