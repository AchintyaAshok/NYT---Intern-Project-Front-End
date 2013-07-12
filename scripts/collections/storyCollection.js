define([
	'backbone',
	'models/story'
], function(Backbone, Story){
	//a batch is defined as the group of screenshots taken in the same cron job
	var StoryList = Backbone.Collection.extend({
		model: Story,
		url: '/Story',

	});

	return StoryList;
});
