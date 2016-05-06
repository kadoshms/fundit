define([
        'jquery',
        'backbone',
        'mustache',
        'classes/product',
        'views/modal',
        'text!templates/campaign/products.mustache',
        'text!templates/campaign/selected_thumb.mustache',
], function($, Backbone, Mustache, Product, Modal, Template, SelectedThumbTemplate){
	
	var exports = {};
	
	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'blur #inputKeyword' : 'search',
			'click .item'	:	'openModal',
			'click .removeItem' :  'removeItem'
		},
		openModal: function(e){
			var id = $(e.currentTarget).data('itemid');
			var modal = new Modal.View({callback: this.selectProduct, model :  this.collection.findWhere({itemId : id.toString()})});
			modal.render();
		},
		initialize: function(){
			self_view = this;
			this.collection = new Product.Collection();
			this.selectedProducts = new Product.Collection();
			

			this.listenTo(this.collection, "add change", this.render);
			this.listenTo(this.selectedProducts, "add", this.addSelected);
			this.listenTo(this.selectedProducts, "remove", this.removeSelected);
		},
		selectProduct: function(id){
			var selectedModel = self_view.collection.findWhere({ itemId : id.toString() });
			self_view.selectedProducts.add(selectedModel);
		},
		search	:	function(e){
			var self = this;
			var keyword = $(e.currentTarget).val();
			this.$el.find('#loading').removeClass('hidden');
			
			this.collection.fetch({ data: $.param({ keyword: keyword }) }).done(function(){
				self.$el.find('#loading').addClass('hidden');
			});
		},
		addSelected	:	function(model){
			this.$el.find('#selected-products').append(Mustache.to_html(SelectedThumbTemplate, model.toJSON()));
			this.$el.find('#selected-products').find('[data-itemid="'+model.get('itemId').toString()+'"]')
				.show( "scale", {percent: 100, direction: 'both' }, 500 );
			;
		},
		removeSelected	:	function(model){
			this.$el.find('#selected-products').find('[data-itemid="'+model.get('itemId').toString()+'"]')
				.hide( "scale", {percent: 0, direction: 'both' }, 500 );
			;
		},
		removeItem	:	function(e){
			var id = $(e.currentTarget).data('itemid');
			var model = self_view.selectedProducts.findWhere({itemId:id.toString()});
			self_view.selectedProducts.remove(model);
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, { products : this.collection.toJSON(), selectedProducts : this.selectedProducts.toJSON() }));
			return this;
		}
	});
	
	return exports;
	
});