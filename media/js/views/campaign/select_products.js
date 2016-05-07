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
			'click .removeItemIcon' :  'removeItem',
			'click #next-btn'	:	'finish'
		},
		openModal: function(e){
			var id = $(e.currentTarget).data('itemid');
			var modal = new Modal.View({callback: this.selectProduct, model :  this.collection.findWhere({unique_id : id.toString()})});
			modal.render();
		},
		initialize: function(){
			self_view = this;
			this.collection = new Product.Collection();
			this.selectedProducts = new Product.Collection();
			this.summary = new Backbone.Model({ totalAmount : 0});

			this.listenTo(this.collection, "add change", this.render);
			this.listenTo(this.selectedProducts, "add", this.addSelected);
			this.listenTo(this.selectedProducts, "remove", this.removeSelected);
			this.listenTo(this.summary, "change", this.renderTotal);
		},
		selectProduct: function(id){
			var selectedModel = self_view.collection.findWhere({ unique_id : id.toString() });
			self_view.selectedProducts.add(selectedModel);
		},
		search	:	function(e){
			var self = this;
			var keyword = $(e.currentTarget).val();
			this.$el.find('#no-items').addClass('hidden');
			this.$el.find('#loading').removeClass('hidden');
			this.$el.find('#actual-items').empty();
			this.collection.fetch({ data: $.param({ keyword: keyword }) }).done(function(){
				self.$el.find('#loading').addClass('hidden');
				self.renderSelected();
			});
		},
		addSelected	:	function(model){	
			//set selected
			var id = model.get('unique_id');
			console.log(id)
			this.$el.find('div[data-itemid="'+id+'"]').find('.item-img').addClass('selected');
			this.$el.find('div[data-itemid="'+id+'"]').find('.checkSelected').removeClass('hidden');
			this.$el.find('#selected-products').find('#selected-list').append(Mustache.to_html(SelectedThumbTemplate, model.toJSON()));
			this.$el.find('#selected-products').find('[data-itemid="'+model.get('itemId').toString()+'"]')
				.fadeIn("normal")
			;
			
			var currentTotal = this.summary.get("totalAmount");
			var price = model.get("sellingStatus").convertedCurrentPrice.amount;
			var total = parseFloat(currentTotal+price).toFixed(2);
			this.summary.set({ totalAmount : total});
		},
		removeSelected	:	function(model){
			var id = model.get('unique_id');
			this.$el.find('div[data-itemid="'+id+'"]').find('.item-img').removeClass('selected');
			this.$el.find('div[data-itemid="'+id+'"]').find('.checkSelected').addClass('hidden');
			
//			this.$el.find('#selected-products').find('[data-uniqueId="'+model.get('unique_id').toString()+'"]')
//				.hide( "scale", {percent: 0, direction: 'both' }, 500 );
//			;
//			
			var currentTotal = this.summary.get("totalAmount");
			var price = model.get("sellingStatus").convertedCurrentPrice.amount;
			var total = Math.max(currentTotal-price, 0);
			this.summary.set({ totalAmount : total });
		},
		removeItem	:	function(e){
			var id = $(e.currentTarget).data('itemid');
			var model = self_view.selectedProducts.findWhere({unique_id:id.toString()});
			self_view.selectedProducts.remove(model);
			$(e.currentTarget).parents('.selectedItem').hide( "scale", {percent: 0, direction: 'both' }, 500 );
		},
		getLimitedProducts: function(){
			var products = [];
			
			for(var i=0;i<12;i++){
				if(this.collection.at(i) != undefined)
					products.push(this.collection.at(i).toJSON());
			}
			return products.length == 0 ? undefined : products;
		},
		renderTotal: function(){
			var total = parseFloat(this.summary.get('totalAmount')).toFixed(2);
			this.$el.find('#totalAmount').text(total);
		},
		renderSelected: function(){
			for(var i=0;i<this.selectedProducts.length;i++){
				var model = this.selectedProducts.at(i);
				this.$el.find('#selected-products').find('#selected-list').append(Mustache.to_html(SelectedThumbTemplate, model.toJSON()));
				this.$el.find('.selectedItem').css('display','block')
			}
		},
		finish	:	function(){
			Backbone.history.navigate('home', {trigger:true});
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, { products : this.getLimitedProducts(), summary : this.summary.toJSON()}));
			return this;
		}
	});
	
	return exports;
	
});