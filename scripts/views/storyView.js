define([
	'backbone',
	'underscore',
	'views/slideView',
	'collections/story',
	'templates/storyView'
], function(Backbone,_, SlideView, Story, StoryViewTemplate){

	var StoryListView = Backbone.View.extend({
		id: 'story',
		tagname: 'ul',
		template: _.template(StoryViewTemplate),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.template());//this.model.toJSON()));
			$("#content").html(this.el);
		}
	});

	return StoryListView;

});

