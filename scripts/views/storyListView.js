define([
	'backbone',
	'views/storyListItemView',
	'collections/storylist'
], function(Backbone, StoryListItemView, StoryList){

	var StoryListView = Backbone.View.extend({
		id: 'story',

		tagname: 'ul',

		initialize: function(){
			this.render();
		},


		render: function(){
			var stories = this.collection.models;
			var l = stories.length;
			for(var i = 0; i< l; i++){
				console.log(stories);
				//console.log(stories[i]);
				var storyListItem = new StoryListItemView({model: stories[i]}).render();
				console.log('hi');
				this.$el.append(storyListItem.el);
			}
			console.log(this);
			$("#content").html(this.el);
			return this;
		}
	});

	return StoryListView;

});

