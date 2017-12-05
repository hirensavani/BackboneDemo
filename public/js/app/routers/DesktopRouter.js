// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "models/Photo", "views/View", "views/Details", "collections/Photos"],

    function($, Backbone, Photo, View, Details, Photos) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "photo/:id": "Details"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new View();

            },

            Details: function(id) {
                new Details(id);
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);