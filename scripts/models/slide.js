define([
	'backbone',
	'models/image'
], function(Backbone, Image){

	var Slide = Backbone.Model.extend({
		defaults: {
			"tags" : null
		},

		initialize: function(options){
			this.slide_id = options.slide_id;
			//this.story_id = options.story_id;
			this.slide_type = options.slide_type;
			this.summary = options.summary;
		},

		idAttribute: "slide_id",

	});
	return Slide;
});
