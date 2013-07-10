define(['backbone'],
	function(Backbone){
		
		var Image = Backbone.Model.extend({

			initialize: function(options){
				this.image_id = options.image_id;
				this.image_url = options.image_url;
				this.width = options.width;
				this.height = options.height;
				this.caption = options.caption;
				this.credit = options.credit;
			},

			idAttribute : "image_id"

		});
	}
);
