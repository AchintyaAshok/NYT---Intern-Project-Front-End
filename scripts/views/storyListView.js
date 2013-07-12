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

		tagname: 'ul',

		initialize: function(){
			//var collectionOfStoryListView = this.collection;
			var storyCollection = new StoryCollection();
			storyCollection.fetch({
			    error: function(collection, response){
			        console.log('error', response);
			    },

			    success: function(collection, response){
			    	console.log('success!');
			    }
			});
			for(var i = 0; i < storyCollection.models.length; i++){
				var storyListItemDOM  = new StoryListItemView({storyCollection.models[i]}).render();
				this.$el.append(storyListItemDOM);	//	Add each new dom to the list dom

			}
			this.render();
		},


		render: function(){
			// var stories = this.collection.models; // storylist is a collection of stories
			// var l = stories.length;
			// for(var i = 0; i< l; i++){
			// 	console.log(stories);
			// 	//console.log(stories[i]);
			// 	var storyListItem = new StoryListItemView({model: stories[i]}).render();
			// 	this.$el.append(storyListItem.el);		//	Appends each new Rendered StoryListItem to the given DOM element 

			// }
			// console.log(this);
			$("#page").html(this.el);				//	Finally, draw the StoryListView on the page
			return this;
		},

		events: {
			"click .storyListItem" : "view_story"
		},

		view_story: function(){
			$('#container').html(this.$el);
		}

	});

	return StoryListView;

});

