define([
	'backbone'
], function(Backbone){

	var Story = Backbone.Model.extend({
		defaults: {
			tags = null;
		},

		initialize: function(options){
			this._id 				= options.story_id;
			this.headline 			= options.headline;
			this.authorFirstName 	= options.authorFirstName;
			this.authorLastName		= options.authorLastName;
			populate_tags(options.tags);	//	Get an array of tags

		},

		add_tags: function(tagArray){
			var arr = new Array();
			for(var i = 0; i < tagArray.length; i++){
				arr[i] = tagArray[i];
			}
			this.set({ tags:arr });
		}

		idAttribute: "story_id",

	});

	return Story;

});
