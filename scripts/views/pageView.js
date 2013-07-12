/*
	This creates either a page with a single story consisting of all its information OR a story list of many stories
*/

define([
	'views/storyView',
	'collections/slideCollection'
],
function(StoryView, StoryCollection){
	tagName:'div',
	
	id: 'page',

	events:{
		"click .storyListItem" : "view_story"
	},

	render: function(){
		$("#content").html(this.$el);
	}

	view_story : function(story){
		var storyView = new StoryView({collection: story});
		storyView.render();
	}


});