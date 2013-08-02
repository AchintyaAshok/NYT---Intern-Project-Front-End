define([
	'backbone',
	'underscore',
	'views/createSlideView',
	'views/SlideAdditionBar',
	'text!templates/create_story.html'
], function(Backbone, _, CreateSlideView, SlideAdditionBar, CreateStoryTemplate){
	var CreateStoryView = Backbone.View.extend({
		id:'create_story',
		tagName: 'div',
		className: 'container span12',

		template: _.template(CreateStoryTemplate.replace(/(\r\n|\n|\r)/gm,"")),


		render: function(){
			this.$el.append(this.template());
			var slideAdditionBar = new SlideAdditionBar().render();
			console.log(slideAdditionBar);
			console.log(this.$("#bottomNavBar"));
			this.$("#bottomNavBar").html(slideAdditionBar);
			return this.$el;
		}

	});
	return CreateStoryView;
});