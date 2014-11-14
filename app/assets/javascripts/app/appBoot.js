// This component compensates for the EmployeeAdmin not properly declaring dependencies on jquery libs
//define('appBoot',
//    ['jQueryFix', 'jquery-ui', 'jquery.jqGrid', 'EmployeeAdmin'],
//    function ($, qm, qui, qgrid, app) {
//
//        var applicationFacade = app.ApplicationFacade.getInstance();
//        applicationFacade.startup($('body'));
//    });


define('appBoot', ['jquery'], function () {

    console.log("Loading application... ");
    require(['jquery-migrate'], function () {

        console.log("Applied jQuery fix : " + jQuery.browser != undefined);

        require(['jquery', 'jquery-ui', 'jquery.jqGrid', 'jquery.jqGrid-locale', 'EmployeeAdmin'],
            function ($, qui, qgrid, l, app) {

                console.log("Loaded libs, booting application : " + jQuery.browser != undefined);
                var applicationFacade = app.ApplicationFacade.getInstance();
                applicationFacade.startup($('body'));
            });
    });
});
