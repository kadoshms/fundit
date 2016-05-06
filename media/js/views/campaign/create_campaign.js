define([
         'jquery',
         'backbone',
         'mustache',
         'classes/campaign',
         'views/campaign/new_organization',
         'views/campaign/existing_organization',
         'text!templates/campaign/create.mustache',
         'stickit'
], function($, Backbone, Mustache, Campaign, OrganizationView, ExistingOrganizationView, Template){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'change input[name="optradio"]'	:	'changeOrganizationType'
		},
		changeOrganizationType	:	function(e){
			var value = $(e.currentTarget).val();
			if(value == 1){
				create_view.$el.find('#registered-pno').slideUp();
				create_view.$el.find('#not-registered-pno').slideDown();
			}else{
				create_view.$el.find('#not-registered-pno').slideUp();
				create_view.$el.find('#registered-pno').slideDown();
			}
		},
		bindings:{
			'#inputName'	: 'name',
			'#inputWeb'		: 'website'
		},
		initialize: function(){
			create_view = this;
			this.model = new Campaign.Model();
		},
		render	:	function(){
			var newOrgView = new OrganizationView.View();
			var existingOrgView = new ExistingOrganizationView.View();
			this.$el.html(Mustache.to_html(Template));
			this.$el.find('#registered-pno').html(existingOrgView.render().el);
			this.$el.find('#not-registered-pno').html(newOrgView.render().el);
			return this;
		}
	});

	return exports;
	
});