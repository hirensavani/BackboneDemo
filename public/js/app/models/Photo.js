// Model.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var Photo = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {                
            },

            // Default values for all of the Model attributes
            defaults: {

            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            },
            url: function() {
                return "https://jsonplaceholder.typicode.com/photos/" + this.id;
            }            

        });

        // Returns the Model class
        return Photo;

    }

);
