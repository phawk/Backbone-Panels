define(
["jquery", "underscore", "backbone", "./panel"],
function($, _, Backbone, Panel) {

    return {
        create: function() {
            return new Panel();
        }
    };

});
