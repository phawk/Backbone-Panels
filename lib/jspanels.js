/*
 *  JS Panels
 *
 *  A Backbone layout manager library
 *
 *  @author   Pete Hawkins (@peteyhawkins)
 *  @since    28th September 2013
 */
define(
["underscore", "./panel"],
function(_, Panel) {

    return {

        /*
         *  #create
         *
         *  Returns a new panel
         */
        create: function(options) {
            var custom_class;

            if ( ! _.isObject(options)) { options = {}; }

            if (_.isString(options.className)) { custom_class = options.className; }

            return new Panel({
                el: options.el,
                className: custom_class,
            });
        }

    };

});
