define([
	'backbone',
	'underscore',
	'text!templates/SlideAdditionTemplate.html'
], function(Backbone, _, SlideAdditionTemplate){
	var SlideAdditionBar = Backbone.View.extend({
		id: 'slide_addition',
		tagName: 'div',
		className: 'row span12 navbar',

		template: _.template(SlideAdditionTemplate.replace(/(\r\n|\n|\r)/gm,"")),

		render: function(){
			this.$el.append(this.template());
			return this.$el;
		},
	});
	return SlideAdditionBar;
});