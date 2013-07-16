/*
	This is the full view of a story as it exists in creation or when looking at a story that's already been made.
	This is 
*/

define([
	'backbone',
	'underscore',
	'views/slideView',		//	--> import the slideView because a story has a collection of slides
	'collections/slideCollection',	//	--> incorporates the story collection 
	'templates/storyView'	//	--> Uses the templates/storyView.js template for rendering
], function(Backbone,_, SlideView, SlideCollection, StoryViewTemplate){

	var StoryView = Backbone.View.extend({
		id: 'story',
		tagname: 'div',
		template: _.template("testing!! <%= story_id %>"),//StoryViewTemplate),

		initialize: function(){
			//var slideCollection = new SlideCollection();
			// slideCollection.fetch({
			// 	error: function(collection, response){
			// 		console.log('error', response);			
			//     },

			//     success: function(collection, response){
			//     	for(var i = 0; i < slideCollection.length; i++){
			//     		var slideDOM  = new SlideView({model: slideCollection.models[i]}).render();
			//     		self.$el.append(slideDOM);	//	Add each new dom to the list dom

			//     	}
			//     }
			// });
		},

		render: function(){
			//this.$el.html(this.template());//this.model.toJSON()));
			return this;
		}
	});

	return StoryView;

});

