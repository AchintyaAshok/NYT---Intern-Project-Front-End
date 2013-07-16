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

		//view: {},

		events:{
			"click .storyListItem" : "view_story"
		},

		initialize: function(view){
			this[view] = view;
		}

		render: function(){
			//this.$el.append(this.view.$el);
			console.log(this[view]);
			$("#content").html(this.el);
		},

		// showView: function(view){
		// 	console.log('this.currentView',this.currentView);
		// 	if(this.currentView){
		// 		this.currentView.close();
		// 	}

		// 	this.currentView = view;
		// 	console.log('this.currentView', this.currentView);
		// 	this.currentView.render();

		// 	$("#content").html(this.currentView.$el);
		// 	console.log('this',this);
		// },

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
			        this.view = storyList;
			        console.log(this.view);
			        self.render();
			    }
			});
		},

		view_story : function(ev){
			var storyId = ev.currentTarget.id;
			var self = this;
			var slideCollection = new SlideCollection([],{sId: storyId});
			console.log('collection created');
			slideCollection.fetch({
				success: function(collection, response){
					// for(var r = 0, l = response.length; r<l; r++){
					// 	var m = new SlideModel(response[r]);
					// 	slideCollection.add(m);
					// }
					var storyView = new StoryView({collection: collection}).render();
					if(this.view != undefined){
						this.view.remove();
					}
					this.view = storyView;
					this.render();
				}
			});
		},

	});
	return PageView

});