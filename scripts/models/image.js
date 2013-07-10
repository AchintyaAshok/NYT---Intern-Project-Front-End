define([
	'backbone'
], function(Backbone){

	var Image = Backbone.Model.extend({
		defaults: {
			//summary = null,	//	Slides' don't need a summary
		},

		initialize: function(options){
			this.image_id = options.slide_id;
			//this.story_id = options.story_id;
			//this.slide_type = options.slide_type;
			//this.summary = options.summary;
		},

		idAttribute: "image_id",

	});
	return Image;
});
