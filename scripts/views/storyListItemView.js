define([
	'backbone',
	'underscore',
	'text!templates/template.html'
], function(Backbone, _, Template){

	var StoryListItemView = Backbone.View.extend({

		tagName: 'li',

		template: _.template(Template),//'<h2><%= headline %></h2> by <%= authorFirstName %> <%= authorLastName %>'),


		initialize: function(){
			//this.model.bind("change", this.render, this);
			//this.model.bind("destroy", this.close, this);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return StoryListItemView;

});