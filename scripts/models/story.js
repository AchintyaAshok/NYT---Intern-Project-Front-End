/*
	This is the Story Model, it contains information of what a story object should have.
*/
define([
	'backbone'
], function(Backbone){

	var Story = Backbone.Model.extend({
		defaults: {
			"authorFirstName" : "Ari",
			"authorLastName" : "Vogel"
		},

		initialize: function(options){
			//console.log(options);
			this._id 				= options.story_id;
			this.headline 			= options.headline;
			this.author 			= options.author;
			// this.author		= options.authorLastName;
			//add_tags(options.tags);	//	Get an array of tags

		},

		add_tags: function(tagArray){
			var arr = new Array();
			for(var i = 0; i < tagArray.length; i++){
				arr[i] = tagArray[i];
			}
			this.set({ tags:arr });
		},

		idAttribute: "story_id"

	});

	return Story;

});
