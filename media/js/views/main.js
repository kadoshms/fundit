define([
         'jquery',
         'backbone',
         'mustache',
         'classes/campaign',
         'text!templates/main.mustache'
], function($, Backbone, Mustache, Campaign, Template){
	
	
	var exports = {};

	exports.View = Backbone.View.extend({
		el	: '#main-content',
		render	:	function(){
			var campaigns = [
			     {
			    	 title	:	'Music Room',
			    	 subtitle : 'Help us establish a new music room!',
			    	 image	:	'http://africa-facts.org/wp-content/uploads/2015/01/african-kids.jpg'
			     },
			     {
			    	 title	:	'Music Room',
			    	 subtitle : 'Help us establish a new music room!',
			    	 image	:	'http://teencitytalks.com/wp-content/uploads/2014/09/kid-crying.jpg'
			     },
			     {
			    	 title	:	'Computers',
			    	 subtitle: 'Get computers',
			    	 image	:	'http://news.xinhuanet.com/english/2016-01/09/CnbbeeE005004_20160109_NBMFN0A001_11n.jpg'
			     },
			     {
			    	 title	:	'Music Room',
			    	 subtitle : 'Help us establish a new music room!',
			    	 image	:	'http://africa-facts.org/wp-content/uploads/2015/01/african-kids.jpg'
			     },
			     {
			    	 title	:	'Music Room',
			    	 subtitle : 'Help us establish a new music room!',
			    	 image	:	'http://teencitytalks.com/wp-content/uploads/2014/09/kid-crying.jpg'
			     },
			     {
			    	 title	:	'Computers',
			    	 subtitle: 'Get computers',
			    	 image	:	'http://news.xinhuanet.com/english/2016-01/09/CnbbeeE005004_20160109_NBMFN0A001_11n.jpg'
			     }
			];
			this.$el.html(Mustache.to_html(Template, {campaigns:campaigns}));
			return this;
		}
	});

	return exports;
	
});