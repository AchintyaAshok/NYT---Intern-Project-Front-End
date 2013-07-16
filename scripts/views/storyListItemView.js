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

		template: _.template('<br/>The Story Author:<i><%= author %></i><hr/>'),//Template),//'<h2><%= headline %></h2> by <%= authorFirstName %> <%= authorLastName %>'),

		attributes: {"class":"storyListItem"},	//	Append this class to each Story List Item so we can reference it later


		initialize: function(){
			//console.log(this);
			//this.$el.html(this.template(this.collection.))
			//this.model.bind("change", this.render, this);
			//this.model.bind("destroy", this.close, this);
		},

		render: function(){
			this.$el.attr('id',this.model.id);
			//console.log('@render in StoryListItemView :: checking if model even exists->', this.model.toJSON());
			
			this.$el.append(this.template(this.model.toJSON()));	//	get the json of the model & retrieve the elements, then input
																//	the elements into that template member defined above initialize
			
			console.log('@render in StoryListItemView :: What does the list Item look like?->', this.$el[0].innerHTML); // From this we can see if the templating works
			return this.$el; // return the view
		},

		events: {
			/*	Add event listeners to the child elements of this StoryListItemView, jquery goes here	*/
		},

	});

	return StoryListItemView;

});