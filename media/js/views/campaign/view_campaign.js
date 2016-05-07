define([
        'jquery',
        'backbone',
        'mustache',
        'text!templates/campaign/view_campaign.mustache',
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
		},
		donateNow	:	function(e){
			var amount = $(e.currentTarget).data('donation');
			var form = '<form id="donate-now" action="https://sandbox.paypal.com/cgi-bin/webscr" method="post"><input type="text" name="item_name" value="donation"><input type="text" name="amount" value="'+amount+'"><input type="text" name="currency_code" value="USD"></form>';
			
			$(e.currentTarget).append(form)
			this.$el.find('#donate-now').submit();
		},
		renderChart	: function(){
			var series = [];
			var values = [10,12,20,15];
			for(var i=0;i<values.length;i++){
				series.push({
					name : 'prod '+i,
					data : [values[i]]
				});
			}
			this.$el.find('#chart').highcharts({
		        chart: {
		        	type: 'column',
		        	backgroundColor	:	'#FCFCFC'
		        },
		        colors: ['#89A54E','#4572A7', '#AA4643','#efc802','#1F76E0'],
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
//		                    	console.log(this)
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
			this.$el.html(Mustache.to_html(Template, {perks:this.perks}));
			this.renderChart();
			return this;
		}
	});
	
	return exports;
	
});