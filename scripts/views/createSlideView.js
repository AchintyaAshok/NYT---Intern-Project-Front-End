define([
	'backbone',
	'underscore',
	'text!templates/create-ComparisonSlide.template.html',
	'text!templates/create-SlideshowSlide.template.html',
	'text!templates/create-SlideshowItemSlideItem.html',
], function(Backbone, _, ComparisonSlideTemplate, SlideshowSlideTemplate,SlideshowItemSlideItemTemplate){
	var CreateSlideView = Backbone.View.extend({

		template: function(obj){
			if(this.slide_type == 'Comparison'){
				return _.template(ComparisonSlideTemplate.replace(/(\r\n|\n|\r)/gm,""), obj);
			} else if(this.slide_type == 'Slideshow'){
				return _.template(SlideshowSlideTemplate.replace(/(\r\n|\n|\r)/gm,""), obj);
			}
		},

		initialize: function(options){
			this.slide_type = options.slide_type;
			this.slide_count = options.slide_count;
		},

		render: function(){
			var inject = {slide_count: this.slide_count}
			var html = this.template(inject);
			this.$el.html(html);
			// this.$el.append(html);
			// console.log(this.$el);
			return this.el;
		}


	});
	return CreateSlideView;
});