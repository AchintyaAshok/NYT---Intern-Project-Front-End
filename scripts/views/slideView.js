define([
	'backbone',
	'collections/slideCollection'
], function(Backbone, Story){

	var SlideView = Backbone.View.extend({
		id: 'story',

		tagname: 'div',

		template: _.template('hihi'),

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

