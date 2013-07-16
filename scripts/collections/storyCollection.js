define([
	'backbone',
	'models/story'
], function(Backbone, Story){
	//a batch is defined as the group of screenshots taken in the same cron job
	var StoryCollection = Backbone.Collection.extend({
		model: Story,
		//url: 'http://localhost:8000/Story',//'http://ec2-54-213-12-239.us-west-2.compute.amazonaws.com/getAllStories',
		url: 'http://127.0.0.1:8000/Story',
	});

	return StoryCollection;
});
