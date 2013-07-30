/*
	A collection of slides in a story.	
*/
define([
	'backbone',
	'models/slide'
], function(Backbone, Slide){
	//a batch is defined as the group of screenshots taken in the same cron job
	var SlideCollection = Backbone.Collection.extend({

		initialize: function(models, options) {
			console.log('options');
			console.log(options);
		    this.sid = options.sId;
		  },
		
		url: function() {
		return '/Slide/' + this.sid;
		},
		model: Slide,
		
	});

	return SlideCollection;
});
