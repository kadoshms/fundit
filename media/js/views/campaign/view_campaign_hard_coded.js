define([
        'jquery',
        'backbone',
        'mustache',
        'text!templates/campaign/view_campaign_hard_coded.mustache',
        'highcharts'
], function($, Backbone, Mustache , Template){
	
	var exports = {};
	
	exports.View = Backbone.View.extend({
		el	: '#main-content',
		events:{
			'blur #inputKeyword' : 'search',
			'click .donate-now'	: 'donateNow',
			'click .productLink' : 'donateNow'
		},
		initialize: function(){
			this.perks = [{val:5},{val:15},{val:35}];
			this.products = [
			    {
			    	price	:	8507,
			    	title	:	'Yamaha Guitar',
			    	image	:	'media/image/camp/guitar.jpg',
			    	prcnt	:	83,
			    	link	:	'http://www.ebay.com/itm/Free-Shipping-Used-Gibson-ES-335TD-67-Electric-Guitar-/162062485660?hash=item25bbad489c%3Ag%3AX~kAAOSwxp9W3vcR'
			    },
			    {
			    	price	:	1649,
			    	title	:	'A brand new Drum set',
			    	image	:	'media/image/camp/drums.jpg',
			    	link	:	'http://www.ebay.com/itm/Brand-New-Premier-XPK-Modern-Rock-22-Drum-Kit-/230800864359?hash=item35bccdb467%3Am%3AmpqU2KnRxUs-hHXhc4a3G6w',
			    	prcnt	:	16,
			    		
			    },
			    {
			    	price	:	148,
			    	title	:	'Electric Didgiridoo',
			    	image	:	'media/image/camp/didg.jpg',
			    	link	:	'http://www.ebay.com/itm/Didgeridoo-48-inch-key-D-Authentic-handcrafted-Australian-Eucalyptus-/252377785828?hash=item3ac2e365e4%3Ag%3AvJMAAOSwiYFXGf2K',
			    	prcnt	:	1,
			    	funded	:	true,
			    }
			                 
			];
		},
		donateNow	:	function(e){
			var amount = $(e.currentTarget).data('donation');
			var form = '<form id="donate-now" action="https://sandbox.paypal.com/cgi-bin/webscr" method="post" style="display:hidden"><input type="hidden" name="business" value="kadoshms-facilitator@gmail.com"><input type="hidden" name="item_name" value="Donation"><input type="hidden" name="amount" value="'+amount+'"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="cmd" value="_xclick"></form>';
			
			$(e.currentTarget).append(form)
			this.$el.find('#donate-now').submit();
			this.$el.find('#donate-now').remove();
		},
		renderChart	: function(){
			var series = [];
			for(var i=0;i<this.products.length;i++){
				series.push({
					name : this.products[i].title,
					data : [this.products[i].prcnt]
				});
			}
			this.$el.find('#chart').highcharts({
		        chart: {
		        	type: 'column',
		        	backgroundColor	:	'#FCFCFC'
		        },
		        colors: ['#89A54E','#4572A7', '#efc802','#efc802','#1F76E0'],
		        title: {
		            text: 'products funded'
		        },
		        xAxis: {
		        	lineWidth: 0,
		        	minorGridLineWidth: 0,
		        	lineColor: 'transparent',         
		        	labels: {
		        		enabled: false
		        	},
		        	minorTickLength: 0,
		        	tickLength: 0
		        },
		        credits:{
		        	enabled:false
		        },
		        yAxis: {
		            min: 0,
		            gridLineColor: 'transparent',
		            title: {
		                enabled:false
		            },
		        	labels: {
		        		enabled: false
		        	},
		        },
		        legend: {
		            enabled: false
		        },
		        
		        plotOptions: {
		            series: {
		                stacking: 'normal'
		            },
		            column: {
		            	pointWidth:10,
		                dataLabels: {
		                    enabled: true,
		                    distance : -250,
		                    useHTML:true,
		                    formatter: function() {
		                        var dlabel = "<div style='width:40px;position:relative;left:40px;color:"+this.color+"'>"+this.series.name;
		                        dlabel +=" "+ this.y + '% </div>';
		                            return dlabel
		                     },
		                },
		                
		            },
		        },
		        series:series
		    });
		},
		render	:	function(){
			this.$el.html(Mustache.to_html(Template, {perks:this.perks, products:this.products}));
			this.renderChart();
			return this;
		}
	});
	
	return exports;
	
});