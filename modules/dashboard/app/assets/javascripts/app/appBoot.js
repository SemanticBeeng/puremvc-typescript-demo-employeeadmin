/**
 * Does incremental, controlled loading to patch jQuery so that the grid does not break dou to the reference to jQuery.browser
 */
define('appBoot', ['jquery'], function () {

    console.log("Loading application... ");

    // Now that jquery is loaded, fix it
    require(['jquery-migrate'], function () {

        console.log("Applied jQuery fix : " + jQuery.browser != undefined);

        // Now that jquery is fixed, load plugins
        require(['jquery', 'jquery-ui', 'jquery.jqGrid', 'jquery.jqGrid-locale', 'EmployeeAdmin'],
            function ($, _1, _2, _3, app) {

                // Finally ...
                console.log("Loaded libs, booting application ...");

                var applicationFacade = app.ApplicationFacade.getInstance();
                applicationFacade.startup($('body'));
            });
    });
});
