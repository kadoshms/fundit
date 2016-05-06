define([
         'jquery',
         'backbone',
         'mustache',
         'classes/organization',
         'text!templates/campaign/new_organization.mustache',
         'stickit'
], function($, Backbone, Mustache, Organization, Template){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		events:{
			'click #next-btn'	:	'next'
		},
		bindings:{
			'#inputName'	: 'name',
			'#inputWeb'		: 'website',
			'#inputDesc'	: 'description',
			'#inputLoc'		: 'location'
		},
		initialize: function(){
			this.model = new Organization.Model();
		},
		next	:	function(){
			this.model.save().done(function(){
				Backbone.history.navigate('campaign/create/project', {trigger:true});
			});
		},
		render: function(){
			this.$el.html(Mustache.to_html(Template, {}));
			this.stickit();
			return this;
		}
	});

	return exports;
	
});