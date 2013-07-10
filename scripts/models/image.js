<<<<<<< HEAD
define(['backbone'],
	function(Backbone){
		
		var Image = Backbone.Model.extend({

			initialize: function(options){
				this.image_id = options.image_id;
				this.image_url = options.image_url;
				this.width = options.width;
				this.height = options.height;
				this.caption = options.caption;
				this.credit = options.credit;
			},

			idAttribute = "image_id"

		});
	}
);
=======
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
>>>>>>> fe60cb114ef783a96e71a0962a370ec6b0a113aa
