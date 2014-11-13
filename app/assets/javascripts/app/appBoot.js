// This component compensates for the EmployeeAdmin not properly declaring dependencies on jquery libs
define('appBoot',
//    ['jquery', 'jquery.jquery-ui','jquery.jqGrid', 'EmployeeAdmin'],
//    function ($, a, b, app) {
    ['jquery', 'jquery-ui','jquery.jqGrid', 'EmployeeAdmin'],
    function ($, a, b, app) {

        var applicationFacade = app.ApplicationFacade.getInstance();
        applicationFacade.startup($('body'));
    });


