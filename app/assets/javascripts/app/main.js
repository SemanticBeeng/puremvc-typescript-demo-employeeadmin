/**
 * Standard main.js file used by Require.js to load each module in a parallel process but
 * respecting dependencies declaration precedence order before initializing each.
 *
 * Here, as loading jQuery and its dependencies would have required each of the library to be
 * modified and loaded using Require-jQuery https://github.com/jrburke/require-jquery it has been
 * decided to only load the Employee Admin module and the PureMVC library as a proof of concept
 * for PureMVC TypeScript applications to be loaded asynchronously as AMD modules by Require.js.
 *
 * Employee Admin module has been compiled with the standard AMD wrapper :
 *
 * if( typeof define === "function" )
 * {
 * 		define( "EmployeeAdmin", ['puremvc'], function(puremvc)
 *		{
 *			//TypeScript generated JavaScript code here
 *		}
 * }
 *
 * Have a look at : http://www.tekool.net/blog//2012/11/07/puremvc-typescript/ for more explanations
 * on how the Ant task bundled in the project create the appropriate AMD module file using multiple
 * module files as TypeScript still has some problem with that.
 */

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
            jQuery: 'lib/jquery/jquery-1.9.1',

            puremvc: 'lib/puremvc/puremvc-typescript-standard-1.0',

            EmployeeAdmin: 'app/bin/puremvc-typescript-employeeadmin-1.0'

            //@todo 'jsRoutes': ['/jsroutes']
        },

        shims: {
            'jQuery': {
                exports: '$'
            },

            'jsRoutes': {
                deps: [],
                exports: 'jsRoutes'
            },
            // Hopefully this all will not be necessary but can be fetched from WebJars in the future
            'puremvc': {
                deps: ['jquery'],
                exports: 'puremvc'
            },

            'EmployeeAdmin': {
                deps: ["puremvc", "common", 'dashboard', 'module1', 'module2']
                //exports: 'eaApp'
            }

        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    /***************************************************************************************************
     * Start loading each module and its dependencies.
     */
    require(['EmployeeAdmin'],

        function (app) {
            //Wait for the DOM to be ready before setting up the application.
            $(function () {
                var applicationFacade = app.ApplicationFacade.getInstance();
                applicationFacade.startup(jQuery("body"));
            })
        }
    );

})(requirejs);