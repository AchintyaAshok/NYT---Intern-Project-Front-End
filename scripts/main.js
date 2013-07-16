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
            var storyListCollection = new StoryCollection();

            storyListCollection.fetch({
                error: function(collection, response){
                    console.log('error', response);
                },

                success: function(collection, response){
                    var storyList = new StoryListView({collection: collection}).render();
                    if(this.view != undefined){
                        this.view.remove();
                    }
                    this.view = storyList;
                    console.log(this.view);
                    self.render();
                }
            });

            var pageView = new PageView();
            pageView.storyListView();
            
        },

        testStoryView: function(){
            var story = new Story();
            //var pageView = new PageView();
            story.fetch({
                error: function(collection, response){
                    console.log('error', response);
                },

                success: function(collection, response){
                    // for(var r = 0, l = response.length; r<l;r++){
                    //     var model = new SlideModel(response[r]);
                    //     story.add(model);
                    // }
                    var storyView = new StoryView({collection: story});
                    var pageView = new PageView(storyView);
                    pageView.render(story);
                }
            })
        }
    });
    app = new AppRouter();
    Backbone.history.start();
});