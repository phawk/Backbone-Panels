define(
["backbone"],
function(Backbone) {

    return Backbone.View.extend({

        className: "simple-view",

        render: function() {
            var html = "<p>A Simple view</p>";

            this.$el.html(html);

            return this;
        },

    });

});
