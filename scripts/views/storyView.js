/*
	This is the full view of a story as it exists in creation or when looking at a story that's already been made.
	This is 
*/

define([
	'backbone',
	'underscore',
	'holder',
	'views/slideView',		//	--> import the slideView because a story has a collection of slides
	'collections/slideCollection',	//	--> incorporates the story collection 
	'text!templates/create-story.html',
], function(Backbone,_, Holder, SlideView, SlideCollection, Template){

	var StoryView = Backbone.View.extend({
		id: 'story',
		tagname: 'div',
		template: _.template(Template.replace(/(\r\n|\n|\r)/gm,"")),//StoryViewTemplate),
 
		initialize: function(){
			console.log(this);
			this.$el.append(this.template());//this.model.toJSON()));
			return this.$el;
		},

		render: function(){
			return this.$el;
		}
	});

	return StoryView;

});

