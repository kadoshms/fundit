define([
   'jquery',
   'backbone',
   'classes/config'
], function($, Backbone, config){
	
	var exports = {};
	exports.Collection = Backbone.Collection.extend({
		url	: config.api+'ebay_getbykeyword',
		idAttribute:'itemId',
		parse: function(resp){
			for(var i=0;i<resp.length;i++){
				resp[i]['unique_id'] = resp[i]['itemId'] + '_' + i;
			}
			return resp;
		}
//		url	: 'media/mocks/products.json'
	});

	exports.Model = Backbone.Model.extend();
	return exports;
	
});