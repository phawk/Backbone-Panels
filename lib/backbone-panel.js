/*
 *  Panel
 *
 *  A basic Backbone layout manager
 *
 *  @author   Pete Hawkins (@peteyhawkins)
 *  @since    28th September 2013
 */
define(
["jquery", "underscore", "backbone"],
function($, _, Backbone) {

    return Backbone.View.extend({

        // Add a class for the name
        className: "backbone-panel",

        // Holds references to all active views
        views: null,


        /*
         *  initialize
         *
         *  Set everything up
         */
        initialize: function() {
            this.views = {};

            if (_.isString(this.options.className)) {
                this.$el.attr("class", this.options.className);
            }

            return this;
        },


        /*
         *  add
         *
         *  Adds new views to the panel
         */
        add: function(views) {
            _.each(views, function(view, name) {
                this._addView(name, view);
            }, this);

            return true;
        },


        /*
         *  replace
         *
         *  Replaces one view with another
         */
        replace: function(name, view) {
            var original = this.views[name];

            if ( ! _.isObject(original)) { return false; }

            this._detatchView(original);

            this._addView(name, view);

            return true;
        },


        /*
         *  removeAll
         *
         *  Removes all views
         */
        removeAll: function() {
            _.each(this.views, function(view, name) {
                this._detatchView(view);

                delete this.views[name];
            }, this);

            return true;
        },


        /*
         *  remove
         *
         *  Remove a view
         */
        remove: function(name) {
            if ( ! _.isObject(this.views[name])) { return false; }

            this._detatchView(this.views[name]);

            delete this.views[name];

            return true;
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
        _addView: function(name, view) {
            if ( ! this._isValidView(view)) { return false; }

            // Store a reference to the view
            this.views[name] = view;

            // Render and add the view to the DOM
            view.render();
            this.$el.append(view.$el);

            return true;
        },


        /*
         *  _detatchView
         *
         *  Removes a view from the DOM
         */
        _detatchView: function(view) {
            // Strip the view from the DOM
            view.remove();

            return true;
        },


        /*
         *  _isValidView
         *
         *  Checks a view responds to the correct methods
         */
        _isValidView: function(view) {
            if ( ! _.isObject(view) ||
                 ! (view.$el instanceof $) ||
                 ! _.isFunction(view.remove) ||
                 ! _.isFunction(view.render)) {
                return false;
            }

            return true;
        },


    });

});