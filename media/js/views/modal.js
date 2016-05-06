define([
        'jquery',
        'backbone',
        'mustache',
        'text!templates/modal.mustache',
        'bootsrap'
], function($, Backbone, Mustache, Template){
	var exports = {};
	
	exports.View = Backbone.View.extend({
		initialize : function(params){
			this.model = params.model;
			this.callback = params.callback;
		},
		events : {
			'click #choose-product'	: 'chooseProduct'
		},
		chooseProduct	:	function(e){
			var id = $(e.currentTarget).data('itemid');
			this.callback(id);
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, this.model.toJSON()));
			this.$el.modal("show");
			return this;
		}
	});
	
	return exports;
});