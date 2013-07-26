/*
	StoryListView is a collection of StoryListItems. It aggregates all the storylistitems and
	then after instantiating them given 
*/

define([
	'backbone',
	'views/storyListItemView',
	'collections/storyCollection',	//	collection of stories
	'text!templates/ViewStoryList.html'
], function(Backbone, StoryListItemView, StoryCollection, Template){

	var StoryListView = Backbone.View.extend({
		id: 'storyListContainer',

		tagname: 'div',

		template: _.template(Template.replace(/(\r\n|\n|\r)/gm,"")),

		initialize: function(){
			var self = this;
			this.$el.html(this.template());//this.model.toJSON()));
			var storyCollection = new StoryCollection();
			storyCollection.fetch({
			    error: function(collection, response){
			        console.log('error', response);
			    },

			    success: function(collection, response){
			    	self.collection = collection;
			    	//console.log('@StoryListView->', collection);
			    	for(var i = 0; i < storyCollection.length; i++){
			    		//	Create a Story-List-Item View for each of the Story Models in the Story-Collection & then render the entire thing
			    		var storyListItemDOM  = new StoryListItemView({model: storyCollection.models[i]}).render();
			    		$("#StoryList").append(storyListItemDOM);	//	Add each new storyListItemView into the DOM
			    	}
			    }
			});
			
		},


		render: function(){
			return this.$el;	//	Just return the html element that was constructed without generating html
		},

	});

	return StoryListView;

});

