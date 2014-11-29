/**
 * http://requirejs.org/docs/jquery.html
 * https://github.com/requirejs/example-jquery-shim
 */
//define('jquery', [], function() {
//    return jQuery;
//});

/***************************************************************************************************
 * Define the Require.js config for the Employee Admin demo.
 *
 * @url http://requirejs.org/
 */
// `main-dashboard.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({
        // Packages = top-level folders; loads a contained file named 'main-dashboard.js"
        packages: ['common', 'dashboard', 'customerMgmt', 'admin'],

        baseUrl: 'assets/javascripts/',

        paths: {
            //common: "../lib/common/javascripts",

            // Had to add this here but not for jquery
            "knockout": [ webjars.path("knockout", "knockout") ],

            'jquery-migrate': ['./common/lib/jquery/jquery-migrate-1.2.1'],

            'jquery.jqGrid': ['./common/lib/jqgrid/js/jquery.jqGrid.min'],

            'jquery.jqGrid-locale': ['./common/lib/jqgrid/js/i18n/grid.locale-en'],

            puremvc: ['./common/lib/puremvc/puremvc-typescript-standard-1.0-min'],

            appBoot: ['./dashboard/appBoot']
        },

        shims: {

            "knockout": [ "ko" ],

            'jsRoutes': {
                deps: [],
                exports: 'jsRoutes'
            }
        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    /***************************************************************************************************
     * Start loading each module and its dependencies.
     */
    var start = new Date();

    //define("knockout", ["webjars!knockout.js"], function(ko) {return ko});

    requirejs(['knockout']);

    //define("knockout", ["webjars!knockout.js"], function() {return knockout});

    requirejs(['appBoot']);

    requirejs.onResourceLoad = function (context, map, depArray) {
        var duration = new Date() - start;
        console.log("[Resources Loaded]:", map.name, "in " + duration + " ms" + " from "+map.url);
    };


})(requirejs);
