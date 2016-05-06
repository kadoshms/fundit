define([
        'backbone',
        'view_manager',
        'views/main',
        'views/campaign/create_campaign',
        'views/campaign/project_det',
        'views/campaign/select_products'
], function(Backbone,
		ViewManager,
		Mainview,
		CreateCampaignView,
		ProjectDetView,
		ProductsView
	){
	return Backbone.Router.extend({
	    routes: {
	      '':'main',
	      'campaign/create/:stage': 'createCampaign'
	    },
	    initialize: function() {
	    	console.log("??")
	    },
	    main	:	function(){
	    	ViewManager.showView(Mainview);
	    },
	    createCampaign: function(stage) {
	    	var view = CreateCampaignView;
	    	switch(stage){
	    	default:
	    		view  = CreateCampaignView;
	    	break;
	    	case 'project':
	    		view = ProjectDetView;
	    	break;
	    	case 'products':
	    		view = ProductsView;
	    	break;
	    	};
	    	ViewManager.showView(view);
	    }
	  });
});