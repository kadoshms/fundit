define(['backbone'], function(Backbone){
	return Backbone.Router.extend({
	    routes: {
	      'campaign/create': 'openList'
	    },

	    initialize: function() {
	    },

	    openList: function(id) {
	    	alert('!!')
	    }
	  });
});