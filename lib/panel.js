define(
["underscore", "backbone"],
function(_, Backbone) {

    return Backbone.View.extend({

        className: "jspanel",

        views: null,


        /*
         *  initialize
         *
         *  Set everything up
         */
        initialize: function() {
            this.views = {};

            return this;
        },


        /*
         *  add
         *
         *  Adds new views to the panel
         */
        add: function(views) {
            var names = Object.keys(views);

            names.forEach(function(name) {
                this._addView(name, views[name]);
            }, this);

            return true;
        },


        /*
         *  replace
         *
         *  Replaces one view with another
         */
        replace: function(name, view) {
            //
        },


        /*
         *  removeAll
         *
         *  Removes all views
         */
        removeAll: function() {
            //
        },



        /*
         *  --------------------------------------------------------------------
         *  @ PRIVATE
         *  --------------------------------------------------------------------
         */



        /*
         *  _addView
         *
         *  Adds a view to the panel
         */
        _addView: function(view_name, view) {
            if ( ! (view instanceof Backbone.View)) return false;

            // Store a reference to the view
            this.views[view_name] = view;

            // Render and add the view to the DOM
            view.render();
            this.$el.append(view.$el);

            return true;
        },


    });

});
