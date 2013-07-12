/*
	Each story list item in the storylistview which is like an accordian-style interface.
*/

define([ 
	'backbone',
	'underscore',
	'templates/template'
], function(Backbone, _, Template){

	var StoryListItemView = Backbone.View.extend({

		tagName: 'div',

		template: _.template('hi hi hi <%= headline %>'),//Template),//'<h2><%= headline %></h2> by <%= authorFirstName %> <%= authorLastName %>'),

		attributes: {"class":"storyListItem"},	//	Append this class to each Story List Item so we can reference it later


		initialize: function(){
			//console.log(this);
			//this.$el.html(this.template(this.collection.))
			//this.model.bind("change", this.render, this);
			//this.model.bind("destroy", this.close, this);
		},

		render: function(){
			console.log(this.model);
			this.$el.attr('id',this.model.id);
			console.log(this.$el);
			this.$el.html(this.template(this.model.toJSON()));
			return this.$el; // return the DOM
		},

		events: {
			/*	Add event listeners to the child elements of this StoryListItemView, jquery goes here	*/
		},

	});

	return StoryListItemView;

});