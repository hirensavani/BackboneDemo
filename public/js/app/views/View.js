// View.js
// -------
define(["jquery", "backbone", "collections/Photos", "text!templates/heading.html"],

    function($, Backbone, Photos, template){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",

            // View constructor
            initialize: function() {
                this.collection = new Photos()
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                'click .photos': 'clickPhoto' 
            },

            // Renders the view's template to the UI
            render: function() {
                var self = this
                this.collection.fetch({
                    success: function(results) {
                        self.template = _.template(template);
                        self.$el.html(self.template({photos:self.collection.toJSON()}));
                    }
                  });
                // Maintains chainability
                return self;

            },

            clickPhoto: function(e) {
                window.location = "#photo/" + $(e.currentTarget).attr("id")
            }
        });

        // Returns the View class
        return View;

    }

);