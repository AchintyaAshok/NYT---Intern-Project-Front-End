/*
	This is the full view of a story as it exists in creation or when looking at a story that's already been made.
	This is 
*/


define([
	'backbone',
	'underscore',
	'views/slideView',		//	--> import the slideView because a story has a collection of slides
	'text!templates/viewStory.template.html',
], function(Backbone, _, SlideView, StoryTemplate){

	var StoryView = Backbone.View.extend({
		
		id: 'story',
		tagname: 'div',
		className: 'container',

		initialize: function(options){
			this.model = options.model;
			this.slides = this.model.slides;
			this.attrs = this.model.toJSON();
			console.log('Story Attributes:', this.attrs);

			this.slides = this.attrs.slides; // get the slides for this story

			var allSlides = "";

			for(var i=0; i < this.slides.length; i++){
				var slideAttributes = this.slides[i];
				var slideViewElement = new SlideView({slideAttrs:slideAttributes}); // Pass each slide in, get a view back
				var slideNumber = "<h3 class='text-right'>" + (i+1) + "</h3>";
				allSlides += slideNumber;
				slideElem = slideViewElement.render().html();
				//console.log('slide elem:', slideElem);
				allSlides += slideElem;
				allSlides += "<div class='span12 spacing'><hr></div>";
			}

			//console.log('All Slides:', allSlides);

			var templateAttributes = {
				headline: this.attrs.headline,
				author: this.attrs.author,
				image_url: this.attrs.coverPhoto.url,
				slides: allSlides,
			};

			var template = _.template(StoryTemplate.replace(/(\r\n|\n|\r)/gm,""), templateAttributes);
			this.$el.append(template);

		},

		render: function(){
			return this.$el;
		},



	});
	return StoryView;
});

// OLD STUFF BELOW

// define([
// 	'backbone',
// 	'underscore',
// 	'views/slideView',		//	--> import the slideView because a story has a collection of slides
// 	'collections/slideCollection',	//	--> incorporates the story collection 
// ], function(Backbone,_, SlideView, SlideCollection){
// 	var StoryView = Backbone.View.extend({
		
// 		id: 'story',
// 		tagname: 'div',
// 		template: _.template("<%= summary %>"),//StoryViewTemplate),

// 		initialize: function(){
// 			console.log(this);
// 			this.$el.append(this.template(this.collection.models[0]));//this.model.toJSON()));
// 			return this.$el;
// 		},

// 		render: function(){
// 			return this.$el;
// 		}
// 	});

// 	return StoryView;

// });



