define([
	'backbone',
	'underscore',
	'collections/slideCollection',
	'text!templates/comparisonSlide.template.html', // Pass in the templates for different slide types
	'text!templates/slideshowSlide.template.html',
], function(Backbone, _, Story, ComparisonTemplate, SlideshowTemplate){

	var SlideView = Backbone.View.extend({	

		slideshowImageTemplate: _.template("<li class='thumbnail span5' style='height:450px; display:inline-block; vertical-align:top; float:none;'><div style='width:100%; height:300px;'><img src='<%= image_url %>' style='border-style:solid; border-color:white;'></div><div class='text-left' style='height:100px; width:350px; white-space:normal;'><hr><p><%= caption %> <small class='muted'><%= credit %></small></p></div></li>"),

		initialize: function(options){
			this.attrs = options.slideAttrs; // Get the Slide information from options
			//console.log('slide members', this.attrs);
			this.slideType = this.attrs.slide_type;
		},	

		render: function() {
			if (this.slideType == 'Comparison'){
				// Template the Slide using the Comparison Slide Template
				console.log('Comparison Slide--');
				var leftImage = this.attrs.images[0];
				console.log('left-image', leftImage);
				var rightImage = this.attrs.images[1];
				console.log('right-image', rightImage);
				var templateAttributes = {
					'left_image': leftImage.image_url,
					'left_credit': leftImage.credit,
					'left_caption': leftImage.caption,
					'right_image': rightImage.image_url,
					'right_credit': rightImage.credit,
					'right_caption': rightImage.caption,
					'description': this.attrs.summary,
				};
				var template = _.template(ComparisonTemplate.replace(/(\r\n|\n|\r)/gm,""), templateAttributes);
				this.$el.append(template);
			}
			else if (this.slideType == 'Slideshow'){
				// Template the Slide using the Slideshow Slide Template
				console.log('Slideshow Slide--');

				// Add Images to this the slideshow slide
				var images = this.attrs.images;
				console.log('num images: ', images.length)
				var image_list = ""; // this is where we keep adding all the generated list elements
				for(var i=0; i<images.length; i++){
					var elem = this.generate_slideshowslide_image(images[i]);
					if (elem != false){
						image_list += elem;
					}
				}

				var templateAttributes = {
					description: this.attrs.summary,
					list_elements: image_list,
				};

				var template = _.template(SlideshowTemplate.replace(/(\r\n|\n|\r)/gm,""), templateAttributes);
				this.$el.append(template);
			}
			return this.$el;
		},


		generate_slideshowslide_image: function(image){
			if (image == undefined) return false;
			var imageAttributes = {
				caption: image.caption,
				credit: image.credit,
				image_url: image.image_url,
			};
			var templatedImage = this.slideshowImageTemplate(imageAttributes);
			//console.log('templated Image', templatedImage)
			return templatedImage;
		}

		
	});

	return SlideView;

});

