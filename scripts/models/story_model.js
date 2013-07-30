define([
	'backbone'
], function(Backbone){

	var Story = Backbone.Model.extend({

		initialize: function(options){
			this.storyID = options.storyID;
		},

		url: function(){
			return '/Story/' + this.storyID;
		},
		
	});

	return Story;

});