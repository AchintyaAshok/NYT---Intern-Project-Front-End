/*
	This is the full view of a story as it exists in creation or when looking at a story that's already been made.
	This is 
*/

define([
	'backbone',
	'underscore',
	'views/slideView',		//	--> import the slideView because a story has a collection of slides
	'collections/slideCollection',	//	--> incorporates the story collection 
], function(Backbone,_, SlideView, SlideCollection){

	var StoryView = Backbone.View.extend({
		id: 'story',
		tagname: 'div',
		template: _.template("<%= summary %>"),//StoryViewTemplate),

		initialize: function(){
			console.log(this);
			this.$el.append(this.template(this.collection.models[0]));//this.model.toJSON()));
			return this.$el;
		},

		render: function(){
			return this.$el;
		}
	});

	return StoryView;

});

