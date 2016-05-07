define([
        'backbone',
        'view_manager',
        'views/main',
        'views/campaign/create_campaign',
        'views/campaign/project_det',
        'views/campaign/select_products',
        'views/campaign/view_campaign',
        'views/campaign/view_campaign_hard_coded'
], function(Backbone,
		ViewManager,
		Mainview,
		CreateCampaignView,
		ProjectDetView,
		ProductsView,
		ViewCampaign,
		ViewCampaignHardCoded
	){
	return Backbone.Router.extend({
	    routes: {
	      '':'main',
	      'home':'main',
	      'campaign/create/:stage': 'createCampaign',
	      'campaign/view/:id' : 'viewCampaign'
	    },
	    pushState:true,
	    initialize: function() {
	    },
	    main	:	function(){
	    	ViewManager.showView(Mainview);
	    },
	    viewCampaign : function(id){
	    	if(id == 2)
	    		ViewManager.showView(ViewCampaignHardCoded);
	    	else
	    		ViewManager.showView(ViewCampaign);
	    },
	    createCampaign: function(stage) {
	    	console.log("stage")
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