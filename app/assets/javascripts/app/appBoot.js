define(['jquery', 'jquery-ui', 'jqgrid', 'EmployeeAdmin'], function (a, b, c, $, app) {

    $(function() {

        var applicationFacade = app.ApplicationFacade.getInstance();
        applicationFacade.startup($('body'));
    });
});


