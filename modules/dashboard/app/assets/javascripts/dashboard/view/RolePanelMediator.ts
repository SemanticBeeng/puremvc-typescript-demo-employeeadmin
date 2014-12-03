///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../abc/ProxyNames.ts'/>
///<reference path='../model/RoleProxy.ts'/>
///<reference path='components/RolePanel.ts'/>

/**
 * Role panel component <code>Mediator</code>.
 */
import roleProxyRef = require('./../model/RoleProxy');
import rolePanelRef = require('./components/RolePanel');
import proxyNamesRef = require('./../abc/ProxyNames');
import notificationNamesRef = require('./../abc/NotificationNames');
import roleEnumReference = require('./../model/enum/RoleEnum');
import userVOReference = require('./../model/vo/UserVO');
import roleVOReference = require('./../model/vo/RoleVO');

export class RolePanelMediator
		extends puremvc.Mediator {
    /**
     * A shortcut reference to the <code>RoleProxy</code>.
     */
    private roleProxy:roleProxyRef.RoleProxy = null;

    /**
     * Constructs a <code>RolePanelMediator</code> instance.
     *
     * @param name
     *        Name for this <code>Mediator</code>.
     *
     * @param viewComponent
     *        The <code>UserForm</code> view Component this <code>Mediator</code>    manage.
     */
    constructor(name:string, viewComponent:rolePanelRef.RolePanel) {
        super(name, viewComponent);
        super.initializeNotifier("aa");
        this.registerListeners();
        this.roleProxy = <roleProxyRef.RoleProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.ROLE_PROXY);
    }

    /**
     * Return the <code>RolePanel</code> view component this <code>Mediator</code> manage.
     *
     * @return
     *        The <code>RolePanel</code> view component this <code>Mediator</code> manage.
     */
    private getRolePanel():rolePanelRef.RolePanel {
        return <rolePanelRef.RolePanel>/*</>*/ this.viewComponent;
    }

    /**
     * Register event listeners for the UserForm component.
     */
    private registerListeners():void {
        var rolePanel:rolePanelRef.RolePanel = this.getRolePanel();
        rolePanel.addEventListener(rolePanelRef.RolePanel.ADD, this.onAddRole, this);
        rolePanel.addEventListener(rolePanelRef.RolePanel.REMOVE, this.onRemoveRole, this);
    }

    /**
     * Unregister event listeners for the UserForm component.
     */
    private unregisterListeners():void {
        var rolePanel:rolePanelRef.RolePanel = this.getRolePanel();
        rolePanel.removeEventListener(rolePanelRef.RolePanel.ADD, this.onAddRole, this);
        rolePanel.removeEventListener(rolePanelRef.RolePanel.REMOVE, this.onRemoveRole, this);
    }

    /**
     * Called when a role is added to the selected user's role list.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onAddRole(type:string, properties:any):void {
        this.roleProxy.addRoleToUser
        (
            this.getRolePanel().getUser(),
            this.getRolePanel().getSelectedRole()
        );

        this.updateUserRoleList();
        this.getRolePanel().setMode(null);
    }

    /**
     * Called when a role is removed from the selected user's role list.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onRemoveRole(type:string, properties:any):void {
        this.roleProxy.removeRoleFromUser
        (
            this.getRolePanel().getUser(),
            this.getRolePanel().getSelectedRole()
        );

        this.updateUserRoleList();
        this.getRolePanel().setMode(null);
    }

    /**
     * Force the user role list to update its display.
     */
    private updateUserRoleList():void {
        var user:userVOReference.UserVO = this.getRolePanel().getUser();

        var userRoles:roleEnumReference.RoleEnum[] = this.roleProxy.getUserRoles(user.uname);
        this.getRolePanel().setUserRoles(userRoles);
    }

    /**
     * @override
     */
    listNotificationInterests():string[] {
        return [
            notificationNamesRef.NotificationNames.NEW_USER,
            notificationNamesRef.NotificationNames.USER_ADDED,
            notificationNamesRef.NotificationNames.USER_UPDATED,
            notificationNamesRef.NotificationNames.USER_DELETED,
            notificationNamesRef.NotificationNames.CANCEL_SELECTED,
            notificationNamesRef.NotificationNames.USER_SELECTED,
            notificationNamesRef.NotificationNames.ADD_ROLE_RESULT
        ];
    }

    /**
     * @override
     */
    handleNotification(note:puremvc.INotification):void {
        var rolePanel:rolePanelRef.RolePanel = this.getRolePanel();

        switch (note.getName()) {
            case notificationNamesRef.NotificationNames.NEW_USER:
                rolePanel.clearForm();
                rolePanel.setEnabled(false);
                break;

            case notificationNamesRef.NotificationNames.USER_ADDED:
                rolePanel.setUser(<userVOReference.UserVO> /*</>*/ note.getBody());

                var roleVO:roleVOReference.RoleVO = new roleVOReference.RoleVO();
                roleVO.uname = rolePanel.getUser().uname;

                this.roleProxy.addItem(roleVO);
                rolePanel.clearForm();
                rolePanel.setEnabled(false);
                break;

            case notificationNamesRef.NotificationNames.USER_UPDATED:
                rolePanel.clearForm();
                rolePanel.setEnabled(false);
                break;

            case notificationNamesRef.NotificationNames.USER_DELETED:
                rolePanel.clearForm();
                rolePanel.setEnabled(false);
                break;

            case notificationNamesRef.NotificationNames.CANCEL_SELECTED:
                rolePanel.clearForm();
                rolePanel.setEnabled(false);
                break;

            case notificationNamesRef.NotificationNames.USER_SELECTED:
                rolePanel.clearForm();
                rolePanel.setEnabled(true);
                rolePanel.setMode(null);

                rolePanel.setUser(<userVOReference.UserVO> /*</>*/ note.getBody());
                this.updateUserRoleList();
                break;

            case notificationNamesRef.NotificationNames.ADD_ROLE_RESULT:
                this.updateUserRoleList();
                break;
        }
    }

    /**
     * @override
     *
     * This will never be called during the demo but note that we well made the
     * job of removing any listeners from the mediator and the component to
     * make those instances ready for garbage collection.
     */
    onRemove():void {
        this.unregisterListeners();
        this.getRolePanel().destroy();
    }
}