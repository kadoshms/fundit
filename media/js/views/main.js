define([
         'jquery',
         'backbone',
         'mustache',
         'classes/campaign',
         'text!templates/main.mustache',
         'carousel'
], function($, Backbone, Mustache, Campaign, Template){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'click .campaign-box'	: 'openCampaign'
		},
		openCampaign	:	function(e){
			var id = $(e.currentTarget).data('id');
			Backbone.history.navigate('campaign/view/'+id,{trigger:true});
		},
		initialize: function(){
			this.collection = new Campaign.Collection();
			this.collection.fetch();
			this.listenTo(this.collection, "change add", this.render)
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {campaigns:this.collection.toJSON()}));
			  $('#carousel').slick({
				  autoplay	:	true,
				  arrows: true
			});
			return this;
		}
	});

	return exports;
	
});