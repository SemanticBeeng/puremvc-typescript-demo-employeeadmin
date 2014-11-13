define(['jquery', 'EmployeeAdmin'], function ($, app) {

    $(function() {

        var applicationFacade = app.ApplicationFacade.getInstance();
        applicationFacade.startup($('body'));
    });
});


