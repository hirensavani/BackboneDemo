// Collection.js
// -------------
define(["jquery","backbone","models/Photo"],

  function($, Backbone, Photo) {

    // Creates a new Backbone Collection class object
    var Photos = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Photo,
      url: "https://jsonplaceholder.typicode.com/photos",
      parse: function(response) {
        return response.slice(0,100);
      }

    });

    // Returns the Model class
    return Photos;

  }

);