define([
        'backbone',
        'view_manager',
        'views/main',
        'views/create_campaign'
], function(Backbone, ViewManager, Mainview, CreateCampaignView){
	return Backbone.Router.extend({
	    routes: {
	      '':'main',
	      'campaign/create': 'createCampaign'
	    },
	    initialize: function() {
	    	console.log("??")
	    },
	    main	:	function(){
	    	ViewManager.showView(Mainview);
	    },
	    createCampaign: function(id) {
	    	ViewManager.showView(CreateCampaignView);
	    }
	  });
});