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
            //webjars
           'jquery': ['/assets/lib/jquery/jquery'],
//            //webjars
//           'jquery-ui': ['/assets/lib/jquery-ui/jquery-ui'],
            //local
           'jquery-ui': ['./lib/jquery-ui/jquery-ui-1.9.1.custom.min'],
//            //webjars
//           'jqgrid': ['/assets/lib/jqgrid/js/jquery.jqGrid'],
            //local
           'jqgrid': ['./lib/jqgrid/js/jquery.jqGrid'],
//
//            'jquery-jqGridLocale': ['./lib/jqgrid/js/i18n/grid.locale-en'],
            //jQueryGridLocale: 'lib/jqgrid/js/i18n/grid.locale-en',

            puremvc: ['./lib/puremvc/puremvc-typescript-standard-1.0'],

            EmployeeAdmin: ['./app/bin/puremvc-typescript-employeeadmin-1.0'],

            appBoot: ['./app/appBoot']

            //@todo 'jsRoutes': ['/jsroutes']
        },

        shims: {

            'jsRoutes': {
                deps: [],
                exports: 'jsRoutes'
            },

            'jquery-ui': {
                deps: ['jquery'],
                exports: 'jquery-ui'
            },

            'jqgrid': {
                deps: ['jquery', 'jquery-ui'],
                exports: 'jqgrid'
            },

//            'common-lib': {
//                deps: ['jquery', 'jquery-ui', 'jquery-jqGrid', 'jquery-jqGridLocale']
//            },

            'puremvc': {
                exports: 'puremvc'
            },

            'EmployeeAdmin': {
                //deps: ['puremvc', 'common-lib', 'dashboard', 'module1', 'module2'],
                //deps: ['puremvc', 'jquery', 'jquery-ui', 'jqGgid', 'jquery-jqGridLocale']
                deps: ['jquery', 'jquery-ui', 'jqgrid']
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

    requirejs(['app/appBoot'],  function() {
        // log the global context's defineds
        console.log("require.s.contexts._.defined", require.s.contexts._.defined);
    });

    requirejs.onResourceLoad = function(context, map, depArray) {
        var duration = new Date() - start;
        console.log("onResourceLoad", duration + "ms", map.id);
    };


})(requirejs);
