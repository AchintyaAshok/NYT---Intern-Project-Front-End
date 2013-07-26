/*
	This creates either a page with a single story consisting of all its information OR a story list of many stories
*/

define([
	'views/storyView',
	'views/storyListView',
	'models/story',
	'models/slide',
	'collections/storyCollection',
	'collections/slideCollection'
],
function(StoryView, StoryListView, StoryModel, SlideModel, StoryCollection, SlideCollection){
	var PageView = Backbone.View.extend({
		tagName: 'div',
		
		id: 'page',

		view: {},

		events:{
			"click .storyListItem" : "view_story",
			"click .addStory" : "addStory"
		},


		initialize: function(options){
			this.view = options.view;
			this.collection = options.collection;
		},

		render: function(){

			this.$el.html(this.view);

			$("#content").html(this.$el);
		},

		storyListView : function(){
			var self = this;
			var storyListCollection = new StoryCollection();
			storyListCollection.fetch({
			    error: function(collection, response){
			        console.log('error', response);
			    },

			    success: function(collection, response){
			        var storyList = new StoryListView({collection: collection}).render();
			        if(this.view != undefined){
			        	this.view.remove();
			        }
			        self.view = storyList;
			        self.render();
			    }
			});
			for(var i = 0, l= storyCollection.length; i<l; i++){
				this.stories[storyCollection[i].story_id] = storyCollection[i];
			}
			console.log('stories');
			console.log(this.stories);
		},

		view_story : function(ev){
			var storyId = ev.currentTarget.id;
			var self = this;
			var slideCollection = new SlideCollection([],{sId: storyId}); // get the slide collection
			//console.log('collection created');
			slideCollection.fetch({
				error: function(error, response){
					console.log('error, ',error);
					console.log('response, ',response);
				},
				success: function(collection, response){
					//console.log('test');
					//console.log('collection',collection);
					var storyView = new StoryView({collection: collection});
					console.log('storyview', storyView)
					storyView = storyView.render();
					if(this.view != undefined){
						this.view.remove();
					}
					self.view = storyView;
					self.render();
				}
			});


		},

		addStory: function(){
			console.log("ADD STORY");
		}

	});
	return PageView

});