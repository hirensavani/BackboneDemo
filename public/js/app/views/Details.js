// View.js
// -------
define(["jquery", "backbone", "models/Photo", "text!templates/details.html"],

    function($, Backbone, Photo, template){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",

            // View constructor
            initialize: function(option) {                
                this.model = new Photo({id: option})
                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {               
            },

            // Renders the view's template to the UI
            render: function() {
                var self = this
                this.model.fetch({
                    success: function(results) {
                        self.template = _.template(template);
                        self.$el.html(self.template({photo:self.model.toJSON()}));
                    }
                  });
                
                // Maintains chainability
                return self;

            }
        });

        // Returns the View class
        return View;

    }

);