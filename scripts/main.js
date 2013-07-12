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
function(StoryListCollection, Story, StoryModel, SlideModel, SlideView, StoryListView, StoryListItemView, StoryView, PageView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "home",
            "story/:id": "story",
            "testStoryView": "testStoryView",
        },

        // initialize: function(){
            
        // },

        home: function(){
            var storyListCollection = new StoryListCollection();
            storyListCollection.fetch({
                error: function(collection, response){
                    console.log('error', response);
                },

                success: function(collection, response){
                    for(var r = 0, l = response.length; r<l; r++){
                        var m = new StoryModel(response[r]);    //  for each element in the response, you create a story based off of the story model 
                        storyListCollection.add(m);             //  add each new model to the collection 
                        //console.log(storyListCollection);
                    }
                    var storyList = new StoryListView({collection: storyListCollection});

                }
            });
            
        },

        testStoryView: function(){
            var story = new Story();
            var pageView = new PageView();
            var storyView = new StoryView(collection: story);
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