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
			    	//console.log('@StoryListView->', collection);
			    	for(var i = 0; i < storyCollection.length; i++){
			    		//	Create a Story-List-Item View for each of the Story Models in the Story-Collection & then render the entire thing
			    		var storyListItemDOM  = new StoryListItemView({model: storyCollection.models[i]}).render();
			    		self.$el.append(storyListItemDOM);	//	Add each new storyListItemView into the DOM
			    	}
			    	console.log('@initialize in storyListView :: what does the entire StoryListView look like?->', self.$el); // check what this element's html looks like
			    }
			});
			
		},


		render: function(){
			return this.$el;	//	Just return the html element that was constructed without generating html
		},

	});

	return StoryListView;

});

