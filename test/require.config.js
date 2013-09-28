require.config({
    baseUrl: "",
    paths: {
        // App deps
        "jquery": "vendor/jquery/jquery",
        "underscore": "vendor/underscore/underscore",
        "backbone": "vendor/backbone/backbone",

        // Dev / Test deps
        "chai": "vendor/chai/chai",
        "sinon-chai": "vendor/sinon-chai/sinon-chai",
        "jquery-chai": "vendor/jquery-chai/jquery-chai",
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});
