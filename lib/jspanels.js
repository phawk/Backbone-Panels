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
            if ( ! _.isObject(options)) { options = {}; }

            return new Panel({
                el: options.element
            });
        }

    };

});
