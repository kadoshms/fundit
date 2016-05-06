define([
         'jquery',
         'backbone',
         'mustache',
         'classes/campaign',
         'views/campaign/new_organization',
         'stickit'
], function($, Backbone, Mustache, Campaign, OrganizationView){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
//			'click #next-btn'	:	'next'
		},
		bindings:{
			'#inputName'	: 'name',
			'#inputWeb'		: 'website'
		},
		initialize: function(){
			this.model = new Campaign.Model();
		},
		render	:	function(){
			var organizationView = new OrganizationView.View();
			this.$el.html(organizationView.render().el);
			this.stickit();
			return this;
		}
	});

	return exports;
	
});