/*
	StoryListView is a collection of StoryListItems. It aggregates all the storylistitems and
	then after instantiating them given 
*/

define([
	'backbone',
	'views/storyListItemView',
	'collections/storyCollection'	//	collection of stories
], function(Backbone, StoryListItemView, StoryCollection){

	var StoryListView = Backbone.View.extend({
		id: 'storyList',

		tagname: 'div',

		initialize: function(){
			var self = this;
			var storyCollection = new StoryCollection();
			storyCollection.fetch({
			    error: function(collection, response){
			        console.log('error', response);
			    },

			    success: function(collection, response){
			    	for(var i = 0; i < storyCollection.length; i++){
			    		var storyListItemDOM  = new StoryListItemView({model: storyCollection.models[i]}).render();
			    		self.$el.append(storyListItemDOM);	//	Add each new dom to the list dom

			    	}
			    }
			});
			
		},


		render: function(){
			return this;
		}

	});

	return StoryListView;

});

