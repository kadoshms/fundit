define([
        'backbone',
        'view_manager',
        'views/main',
        'views/campaign/create_campaign',
        'views/campaign/project_det',
        'views/campaign/select_products',
        'views/campaign/view_campaign'
], function(Backbone,
		ViewManager,
		Mainview,
		CreateCampaignView,
		ProjectDetView,
		ProductsView,
		ViewCampaign
	){
	return Backbone.Router.extend({
	    routes: {
	      '':'main',
	      'campaign/create/:stage': 'createCampaign',
	      'campaign/view/:id' : 'viewCampaign'
	    },
//	    pushState:true,
	    initialize: function() {
	    },
	    main	:	function(){
	    	console.log("#@!23")
	    	ViewManager.showView(Mainview);
	    },
	    viewCampaign : function(){
	    	ViewManager.showView(ViewCampaign);
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