define([
	'backbone',
	'underscore',
	'text!templates/create-ComparisonSlide.template.html',
	'text!templates/create-SlideshowSlide.template.html'
], function(Backbone, _, ComparisonSlideTemplate, SlideshowSlideTemplate){
	var CreateSlideView = Backbone.View.extend({

		template: function(){
			if(this.slide_type == 'Comparison'){
				return _.template(ComparisonSlideTemplate.replace(/(\r\n|\n|\r)/gm,""));
			} else if(this.slide_type == 'Slideshow'){
				return _.template(SlideshowSlideTemplate.replace(/(\r\n|\n|\r)/gm,""));
			}
		},

		initialize: function(options){
			this.slide_type = options.slide_type
		},

		render: function(){
			console.log(this);
			var html = this.template('hi');
			console.log(html);
			this.$el.html(html);
			// this.$el.append(html);
			// console.log(this.$el);
			return this.el;
		}


	});
	return CreateSlideView;
});