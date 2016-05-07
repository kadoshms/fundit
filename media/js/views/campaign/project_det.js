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
		next:	function(){
			this.model.save().done(function(response){
				console.log(response)
//				Backbone.history.navigate('campaign/create/products', {trigger:true});
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