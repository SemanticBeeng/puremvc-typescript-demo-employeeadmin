///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>

///<reference path='../abc/MediatorNames.ts'/>

///<reference path='../view/UserListMediator.ts'/>
///<reference path='../view/UserFormMediator.ts'/>
///<reference path='../view/RolePanelMediator.ts'/>

///<reference path='../view/components/RolePanel.ts'/>
///<reference path='../view/components/UserForm.ts'/>
///<reference path='../view/components/UserList.ts'/>

/**
 * Configure and initialize view for the application.
 */
import userFormRef = require('./../view/components/UserForm');
import userListRef = require('./../view/components/UserList');
import rolePanelRef = require('./../view/components/RolePanel');
import userListMediatorRef = require('./../view/UserListMediator');
import userFormMediatorRef = require('./../view/UserFormMediator');
import rolePanelMediatorRef = require('./../view/RolePanelMediator');

import mediatorNamesRef = require('./../abc/MediatorNames');

export class PrepViewCommand
		extends puremvc.SimpleCommand {
    /**
     * @override
     */
    execute(note:puremvc.INotification) {
        debugger;
        var mainView:JQuery = note.getBody();

        /*
         * View Components are initialized using the application main view selector
         */
        var userForm:userFormRef.UserForm = new userFormRef.UserForm(mainView.find(".user-form-panel"));
        var userList:userListRef.UserList = new userListRef.UserList(mainView.find(".user-list-panel"));
        var rolePanel:rolePanelRef.RolePanel = new rolePanelRef.RolePanel();

        /*
         * Mediators initialization
         */
        var userListMediator:puremvc.IMediator = new userListMediatorRef.UserListMediator(mediatorNamesRef.MediatorNames.USER_LIST_MEDIATOR, userList);
        var userFormMediator:puremvc.IMediator = new userFormMediatorRef.UserFormMediator(mediatorNamesRef.MediatorNames.USER_FORM_MEDIATOR, userForm);
        var rolePanelMediator:puremvc.IMediator = new rolePanelMediatorRef.RolePanelMediator(mediatorNamesRef.MediatorNames.ROLE_PANEL_MEDIATOR, rolePanel);

        /*
         * PureMVC mediators registration
         */
        this.facade.registerMediator(userFormMediator);
        this.facade.registerMediator(userListMediator);
        this.facade.registerMediator(rolePanelMediator);
    }
}