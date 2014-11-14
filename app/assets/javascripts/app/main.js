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
// `main.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({
        // Packages = top-level folders; loads a contained file named 'main.js"
        packages: ['common', 'dashboard', 'module1', 'module2'],

        baseUrl: 'assets/javascripts/',

        paths: {
            'jquery-migrate': ['./lib/jquery/jquery-migrate-1.2.1'],

            'jquery.jqGrid': ['./lib/jqgrid/js/jquery.jqGrid.min'],

            'jquery.jqGrid-locale': ['./lib/jqgrid/js/i18n/grid.locale-en'],

            puremvc: ['./lib/puremvc/puremvc-typescript-standard-1.0'],

            EmployeeAdmin: ['./app/bin/puremvc-typescript-employeeadmin-1.0'],

            appBoot: ['./app/appBoot']
        },

        shims: {

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

    requirejs(['appBoot']);

    requirejs.onResourceLoad = function (context, map, depArray) {
        var duration = new Date() - start;
        console.log("onResourceLoad", duration + "ms", map.id);
    };


})(requirejs);
