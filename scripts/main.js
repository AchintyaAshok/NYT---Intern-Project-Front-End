requirejs.config({
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],

            exports: 'Backbone'
        },
        'underscore' : {
            exports: '_'
        },
        'jquery': {
            exports: 'jquery'
        }
    },
    paths: {
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery'
    }
})

requirejs(['collections/storyCollection', 'collections/slideCollection', 'models/story', 'models/slide', 'views/slideView', 'views/storyListView', 'views/storyListItemView','views/storyView', 'views/pageView' ],
function(StoryCollection, slideCollection, StoryModel, SlideModel, SlideView, StoryListView, StoryListItemView, StoryView, PageView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "home",
            "story/:id": "story",
            "testStoryView": "testStoryView",
        },

        // initialize: function(options){
        
        // },

        home: function(){
            var pageView = new PageView();
            pageView.storyListView();
            
        },

        testStoryView: function(){
            var story = new Story();
            var pageView = new PageView();
            var storyView = new StoryView({collection: story});
            story.fetch({
                error: function(collection, response){
                    console.log('error', response);
                },

                success: function(collection, response){
                    for(var r = 0, l = response.length; r<l;r++){
                        var model = new SlideModel(response[r]);
                        story.add(model);
                    }
                    storyView.render(story);
                }
            })
        }
    });
    app = new AppRouter();
    Backbone.history.start();
});