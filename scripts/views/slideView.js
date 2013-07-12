define([
	'backbone',
	'collections/slideCollection'
], function(Backbone, Story){

	var SlideView = Backbone.View.extend({
		
		attributes: {
			'class': 'slide'
		},

		tagname: 'div',

		template: _.template('slide template id: '),//<%= slide_id %>'),

		initialize: function(){
			this.render();
		},


		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return SlideView;

});

