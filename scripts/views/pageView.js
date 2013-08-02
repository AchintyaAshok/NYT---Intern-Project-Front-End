/*
	This creates either a page with a single story consisting of all its information OR a story list of many stories
*/

define([
	'views/storyView',
	'views/storyListView',
	'views/createStoryView',
	'views/createSlideView',
	'models/story',
	'models/slide',
	'collections/storyCollection',
	'collections/slideCollection',
	'models/story_model',
	'text!templates/create-SlideshowItemSlideItem.html',
],
// <<<<<<< HEAD
// function(StoryView, StoryListView, StoryModel, SlideModel, StoryCollection, SlideCollection, Story_Model){
// =======
function(StoryView, StoryListView, CreateStoryView, CreateSlideView, StoryModel, SlideModel, StoryCollection, SlideCollection, Story_Model,SlideshowItemSlideItemTemplate){
// >>>>>>> e6356b713dc7cd6728ee1cfc1dd48cf59dc59bf7
	var PageView = Backbone.View.extend({
		tagName: 'div',
		className: 'container',
		
		id: 'page',

		slideCount: 0,

		view: {},

		events:{
			"click .storyListItem" : "view_story",
			"click .addStory" : "addStory",
			"click #add-slide": "configSlide",
		},

		initialize: function(options){
			this.view = options.view;
			this.collection = options.collection;
		},

		render: function(){
			var self = this;
			this.$el.html(this.view);

			$("#content").html(this.$el);
			$(".newSlide").click(
				function(ev){
					self.addSlide(ev);
				});

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
			//console.log('stories');
			//console.log(this.stories);
		},

		view_story : function(ev){
			var id = ev.currentTarget.id; // get the storyID from the attribute of what was clicked on
			var self = this;
			// var slideCollection = new SlideCollection([],{sId: storyId}); // get the slide collection
			// //console.log('collection created');
			// slideCollection.fetch({
			// 	error: function(error, response){
			// 		console.log('error, ',error);
			// 		console.log('response, ',response);
			// 	},
			// 	success: function(collection, response){
			// 		//console.log('test');
			// 		//console.log('collection',collection);
			// 		var storyView = new StoryView({collection: collection});
			// 		console.log('storyview', storyView)
			// 		storyView = storyView.render();
			// 		if(this.view != undefined){
			// 			this.view.remove();
			// 		}
			// 		self.view = storyView;
			// 		self.render();
			// 	}
			// });
			var storyModel = new Story_Model({storyID:id}); // Pass the story id into the model, to instantiate it
			storyModel.fetch({
				error: function(response){
					console.log('could not fetch story:', response);
				},
				success: function(model, response){
					var storyData = model;
					//console.log(StoryView);
					var storyView = new StoryView({model:storyData});
					self.view = storyView.render();
					//console.log('Returned Story View:', self.view);
					self.render();
				},
			});


		},

		addStory: function(){
			var storyView = new CreateStoryView().render();
			this.view.remove();
			this.view = storyView;
			this.render();
			$('.slide-selection-nav li:gt(1)').hide();
			$('#add-slide').click(function(){
				var slideChoices = $('.slide-selection-nav li:gt(1)');
				slideChoices.toggle('slow', function(){
					var display = slideChoices.css("display");
					if (display == 'list-item'){
						$('#add-slide').fadeOut(250, function(){
							$(this).text('Hide');
							$(this).fadeIn(250);
						});
					}
					else{
						$('#add-slide').fadeOut(250, function(){
							$(this).text('Add Slide');
							$(this).fadeIn(250);
						});
					}
				});
			});

		},

		addSlide: function(ev){
			var self = this;
			var slideChoices = $('.slide-selection-nav li:gt(1)');
			slideChoices.toggle('slow', function(){
				var display = slideChoices.css("display");
				if (display == 'list-item'){
					$('#add-slide').fadeOut(250, function(){
						$(this).text('Hide');
						$(this).fadeIn(250);
					});
				}
				else{
					$('#add-slide').fadeOut(250, function(){
						$(this).text('Add Slide');
						$(this).fadeIn(250);
					});
				}
			});
			var newSlide = new CreateSlideView({'slide_type': ev.target.textContent, 'slide_count': this.slideCount}).render();
			$("#slides").append(newSlide);
			this.slideCount += 1;
			//handle adding items to slideshow slides
			if(ev.target.textContent == 'Slideshow'){
				$(".addSlideshowSlideItem").click(
					function(ev){
						console.log('ev');
						console.log(ev.currentTarget.id);
						self.addSlideshowSlideItem(ev.currentTarget.id);
					});
			}
		},

		addSlideshowSlideItem: function(id){
			console.log('success');
			var html = _.template(SlideshowItemSlideItemTemplate.replace(/(\r\n|\n|\r)/gm,""));
			console.log(html);
			console.log($("#image-pane"+id))
			$("#image-pane"+id).append(html);
		},

		configSlide: function(){
			var slideChoices = $('.slide-selection-nav li:gt(1)');
			slideChoices.toggle('slow', function(){
				var display = slideChoices.css("display");
				if (display == 'list-item'){
					$('.add-slide').fadeOut(250, function(){
						$(this).text('Hide');
						$(this).fadeIn(250);
					});
				}
				else{
					$('.add-slide').fadeOut(250, function(){
						$(this).text('Add Slide');
						$(this).fadeIn(250);
					});
				}
			});
		},

	});
	return PageView

});