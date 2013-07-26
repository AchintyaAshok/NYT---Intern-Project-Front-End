/*
	A collection of slides in a story.	
*/
define([
	'backbone',
	'models/slide'
], function(Backbone, Slide){
	//a batch is defined as the group of screenshots taken in the same cron job
	var SlideCollection = Backbone.Collection.extend({

		initialize: function(models, options) {
			console.log('options');
			console.log(options);
		    this.sid = options.sId;
		  },
		  url: function() {
		    return 'http://localhost:8000/Slide/' + this.sid;
		  },
		  model: Slide,

		// // self: this,
		// initialize: function(models, options) {
		// 	console.l
		// 	self.storyId = options.sId;
		// //     self.model = Slide;
		// //     self.url = 'http://localhost:8000/getSlides/'+this.storyId;// TODO  --> /story/id
		// },

		// // url: function(){
		// // 	if(this.hasOwnProperty(storyId)){
		// // 		return 'http://localhost:8000/getSlides/'+this.storyId;
		// // 	} else{
		// // 		return 'http://localhost:8000/getSlides/';
		// // 	}
		// // },

		// url: function(){
		// 	return 'http://localhost:8000/getSlides/'+this.storyId;
		// },

		// storyId: '1'
		
	});

	return SlideCollection;
});
