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

requirejs(['collections/storyCollection', 'collections/slideCollection', 'models/story', 'models/slide', 
    'views/slideView', 'views/storyListView', 'views/storyListItemView','views/storyView', 'views/pageView', 'models/story_model' ],
function(StoryCollection, SlideCollection, Story, SlideModel, 
    SlideView, StoryListView, StoryListItemView, StoryView, PageView, Story_Model){
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "home",
            "story/:id": "story",
            "testStoryView": "testStoryView",
        },

        // pageView : new PageView(),

        home: function(){
            var storyListView = new StoryListView();
            var rendered = storyListView.render();
            console.log(storyListView);
            var pageView = new PageView({view: rendered, collection: storyListView});
            pageView.render();


            // var storyListCollection = new StoryCollection();
            // var viewToRender;
            // var self = this;
            // var pageView = new PageView();
            // this.pageView = pageView;

            // storyListCollection.fetch({
            //     error: function(collection, response){
            //         console.log('error', response);
            //     },

            //     success: function(collection, response){
            //         //console.log('Number of Stories Fetched->', collection.models.length);
                    
            //         var storyListView = new StoryListView({collection: storyListCollection}).render();
            //         self.pageView.view = storyListView;
            //         // if(this.view != undefined){
            //         //     this.view.remove();
            //         // }
            //         // this.view = storyList;
            //         // //console.log(this.view);
            //         // self.render();
            //         console.log('@success @home in main.js->', viewToRender);
            //     },
            // });

            // //var pageView = new PageView(viewToRender); //  create the page with the Story List View
            // this.pageView.view = viewToRender;
            // this.pageView.storyListView();
            
        },

        testStoryView: function(){
            //var slideCollection = new SlideCollection();
            //var viewToRender;
            //var pageView = new PageView();
            // slideCollection.fetch({
            //     error: function(collection, response){
            //         console.log('error', response);
            //     },

            //     success: function(collection, response){
            //         // for(var r = 0, l = response.length; r<l;r++){
            //         //     var model = new SlideModel(response[r]);
            //         //     story.add(model);
            //         // }
            //         var storyView = new StoryView({collection: slideCollection});
            //         viewToRender = storyView;
            //         //pageView.render(slideCollection);
            //     }
            // });

            //this.pageView.view = viewToRender;
            this.pageView.view_story();
        }
    });
    app = new AppRouter();
    Backbone.history.start();
});