define([
        'jquery',
        'backbone',
        'mustache',
        'classes/product',
        'text!templates/campaign/products.mustache',
], function($, Backbone, Mustache, Product, Template){
	
	var exports = {};
	
	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'blur #inputKeyword' : 'search'
		},
		initialize: function(){
			this.collection = new Product.Collection();
			this.listenTo(this.collection, "add change", this.render);
		},
		search	:	function(){
			var self = this;
			this.$el.find('#loading').removeClass('hidden');
			this.collection.fetch({ data: $.param({ keyword: 'guitar'}) }).done(function(){
				self.$el.find('#loading').addClass('hidden');
			});
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, { products : this.collection.toJSON() }));
			return this;
		}
	});
	
	return exports;
	
});