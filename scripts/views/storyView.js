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
], function(Backbone,_, SlideView, Story, StoryViewTemplate){

	var StoryView = Backbone.View.extend({
		id: 'story',
		tagname: 'ul',
		template: _.template(StoryViewTemplate),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.template());//this.model.toJSON()));
			$("#page").html(this.el);
		}
	});

	return StoryView;

});

