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
			"click .storyListItem" : "view_story"
		},


		initialize: function(options){
			this.view = options.view;
			// console.log('@initialize in PageView->',view);
			// this[view] = view;
		},

		render: function(){
			//this.$el.append(this.view.$el);
			//console.log(this.view);
			//console.log('rendering page view:', this.view);
			this.$el.html(this.view);
			//console.log('@render in pageView :: rendering the entire element->', this.$el);
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
			        //console.log('@success @storyListView in pageView :: logging the view->', self.view);

			        self.render();
			    }
			});
		},

		view_story : function(ev){
			//console.log('YO');
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

	});
	return PageView

});