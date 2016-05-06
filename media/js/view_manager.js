define([], function() {
	var ViewManager = {
		showView : function(view) {
			var view = new view.View();
			view.render();
		}
	};

	return ViewManager;
});