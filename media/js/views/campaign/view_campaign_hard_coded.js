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
			'click .donate-now'	: 'donateNow'
		},
		initialize: function(){
			this.perks = [{val:5},{val:15},{val:35}];
			this.products = [
			    {
			    	price	:	'140',
			    	title	:	'Yamaha Guitar',
			    	image	:	'media/image/camp/guitar.jpg'
			    },
			    {
			    	price	:	'200',
			    	title	:	'A brand new Drum set',
			    	image	:	'media/image/camp/drums.jpg'
			    },
			    {
			    	price	:	'120',
			    	title	:	'Electric Didgiridoo',
			    	image	:	'media/image/camp/didg.jpg'
			    }
			                 
			];
		},
		donateNow	:	function(e){
			var amount = $(e.currentTarget).data('donation');
			var form = '<form id="donate-now" action="https://sandbox.paypal.com/cgi-bin/webscr" method="post" style="display:hidden"><input type="hidden" name="business" value="kadoshms-facilitator@gmail.com"><input type="hidden" name="item_name" value="Donation"><input type="hidden" name="amount" value="'+amount+'"><input type="hidden" name="currency_code" value="USD"></form>';
			
			$(e.currentTarget).append(form)
			this.$el.find('#donate-now').submit();
			this.$el.find('#donate-now').remove();
		},
		renderChart	: function(){
			var series = [];
			var values = [10,12,20];
			var products = ['Guitar', 'Drums', 'Didgridoo'];
			for(var i=0;i<values.length;i++){
				series.push({
					name : products[i],
					data : [values[i]]
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
		                        var dlabel = "<span style='position:relative;left:50px;color:"+this.color+"'>"+this.series.name;
		                        dlabel +=" "+ this.y + '% </span>';
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