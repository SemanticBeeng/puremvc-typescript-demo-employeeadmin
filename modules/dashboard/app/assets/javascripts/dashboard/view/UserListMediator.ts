///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../abc/ProxyNames.ts'/>
///<reference path='../model/UserProxy.ts'/>
///<reference path='components/UserList.ts'/>

/**
 * User list component <code>Mediator</code>.
 */
import userProxyRef = require('./../model/UserProxy');
import userListRef = require('./components/UserList');
import proxyNamesRef = require('./../abc/ProxyNames');
import notificationNamesRef = require('./../abc/NotificationNames');
import roleEnumReference = require('./../model/enum/RoleEnum');
import userVOReference = require('./../model/vo/UserVO');
import roleVOReference = require('./../model/vo/RoleVO');

export class UserListMediator
		extends puremvc.Mediator {
    /**
     * The <code>UserList</code> UI component this <code>Mediator</code> manage.
     */
    private userList:userListRef.UserList = null;

    /**
     * Constructs a <code>UserListMediator</code> instance.
     *
     * @param name
     *        Name for this <code>Mediator</code>.
     *
     * @param viewComponent
     *        The <code>UserList</code> UI Component this <code>Mediator</code> manage.
     */
    constructor(name:string, viewComponent:userListRef.UserList) {
        super(name, viewComponent);
        super.initializeNotifier("aa");
        this.registerListeners();

        var userProxy:userProxyRef.UserProxy = <userProxyRef.UserProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.USER_PROXY);
        viewComponent.setUsers(userProxy.getUsers());
    }

    /**
     * Register event listeners for the UserForm component.
     */
    private registerListeners():void {
        var userList:userListRef.UserList = this.getUserList();
        userList.addEventListener(userListRef.UserList.NEW, this.onNew, this);
        userList.addEventListener(userListRef.UserList.DELETE, this.onDelete, this);
        userList.addEventListener(userListRef.UserList.SELECT, this.onSelect, this);
    }

    /**
     * Unregister event listeners for the UserForm component.
     */
    private unregisterListeners():void {
        var userList:userListRef.UserList = this.getUserList();
        userList.removeEventListener(userListRef.UserList.NEW, this.onNew, this);
        userList.removeEventListener(userListRef.UserList.DELETE, this.onDelete, this);
        userList.removeEventListener(userListRef.UserList.SELECT, this.onSelect, this);
    }

    /**
     * Return the <code>UserList</code> UI component this <code>Mediator</code> manage.
     *
     * @return
     *        The <code>UserList</code> UI component this    <code>Mediator</code> manage.
     */
    private getUserList():userListRef.UserList {
        return <userListRef.UserList>/*</>*/ this.viewComponent;
    }

    /**
     * @override
     */
    listNotificationInterests():string[] {
        return [
            notificationNamesRef.NotificationNames.CANCEL_SELECTED,
            notificationNamesRef.NotificationNames.USER_UPDATED,
            notificationNamesRef.NotificationNames.USER_ADDED,
            notificationNamesRef.NotificationNames.USER_DELETED
        ];
    }

    /**
     * @override
     */
    handleNotification(note:puremvc.INotification):void {
        var userList:userListRef.UserList = this.getUserList();
        var userProxy:userProxyRef.UserProxy = <userProxyRef.UserProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.USER_PROXY);

        switch (note.getName()) {
            case notificationNamesRef.NotificationNames.CANCEL_SELECTED:
                userList.deSelect();
                break;

            case notificationNamesRef.NotificationNames.USER_UPDATED:
                userList.setUsers(userProxy.getUsers());
                userList.deSelect();
                break;

            case notificationNamesRef.NotificationNames.USER_ADDED:
                userList.setUsers(userProxy.getUsers());
                userList.deSelect();
                break;

            case notificationNamesRef.NotificationNames.USER_DELETED:
                debugger;
                userList.setUsers(userProxy.getUsers());
                userList.deSelect();
                break;
        }
    }

    /**
     * Called when to add a new user to the list.
     */
    private onNew():void {
        var user:userVOReference.UserVO = new userVOReference.UserVO();
        this.sendNotification(notificationNamesRef.NotificationNames.NEW_USER, user);
    }

    /**
     * Called when to delete an user from the list.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onDelete(type:string, properties:any):void {
        debugger;
        var userList:userListRef.UserList = this.getUserList();
        var uname:string = userList.getSelectedUser();
        var userProxy:userProxyRef.UserProxy = <userProxyRef.UserProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.USER_PROXY);
        var selectedUser:userVOReference.UserVO = userProxy.getUser(uname);

        this.sendNotification(notificationNamesRef.NotificationNames.DELETE_USER, selectedUser);
    }

    /**
     * Called when a user is selected in the user list.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onSelect(type:string, properties:any):any {
        var userList:userListRef.UserList = this.getUserList();
        var uname:string = userList.getSelectedUser();
        var userProxy:userProxyRef.UserProxy = <userProxyRef.UserProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.USER_PROXY);
        var selectedUser:userVOReference.UserVO = userProxy.getUser(uname);

        this.sendNotification(notificationNamesRef.NotificationNames.USER_SELECTED, selectedUser);
    }

    /**
     * @override
     *
     * This will never be called during the demo but note that we well made the job of removing
     * any listeners from the mediator and the component to make those instances ready for
     * garbage collection.
     */
    onRemove():void {
        this.unregisterListeners();
        this.getUserList().destroy();
    }
}