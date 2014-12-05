///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../abc/ProxyNames.ts'/>
///<reference path='../model/vo/RoleVO.ts'/>
///<reference path='../model/enum/RoleEnum.ts'/>
///<reference path='../model/UserProxy.ts'/>
///<reference path='components/UserForm.ts'/>

/**
 * User form component <code>Mediator</code>.
 */
import userProxyRef = require('./../model/UserProxy');
import userFormRef = require('./components/UserForm');
import proxyNamesRef = require('./../abc/ProxyNames');
import notificationNamesRef = require('./../abc/NotificationNames');
import roleEnumReference = require('./../model/enum/RoleEnum');
import userVOReference = require('./../model/vo/UserVO');
import roleVOReference = require('./../model/vo/RoleVO');

export class UserFormMediator
		extends puremvc.Mediator {
    /**
     * A shortcut to the application <code>UserProxy</code> instance.
     */
    private userProxy:userProxyRef.UserProxy = null;

    /**
     * Constructs a <code>UserFormMediator</code> instance.
     *
     * @param name
     *        Name for this <code>Mediator</code>.
     *
     * @param viewComponent
     *        The <code>UserForm</code> view Component this <code>Mediator</code>    manage.
     */
    constructor(name:string, viewComponent:userFormRef.UserForm) {
        super(name, viewComponent);
        super.initializeNotifier("aa");
        this.registerListeners();
        this.userProxy = <userProxyRef.UserProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.USER_PROXY);
    }

    /**
     * Return the <code>UserForm</code> view component this <code>Mediator</code> manage.
     *
     * @return
     *        The <code>UserForm</code> view component this <code>Mediator</code> manage.
     */
    private getUserForm():userFormRef.UserForm {
        return <userFormRef.UserForm>/*</>*/ this.viewComponent;
    }

    /**
     * Register event listeners for the UserForm component.
     */
    private registerListeners():void {
        var userForm:userFormRef.UserForm = this.getUserForm();
        userForm.addEventListener(userFormRef.UserForm.ADD, this.onAdd, this);
        userForm.addEventListener(userFormRef.UserForm.UPDATE, this.onUpdate, this);
        userForm.addEventListener(userFormRef.UserForm.CANCEL, this.onCancel, this);
    }

    /**
     * Unregister event listeners for the UserForm component.
     */
    private unregisterListeners():void {
        var userForm:userFormRef.UserForm = this.getUserForm();
        userForm.addEventListener(userFormRef.UserForm.ADD, this.onAdd, this);
        userForm.addEventListener(userFormRef.UserForm.UPDATE, this.onUpdate, this);
        userForm.addEventListener(userFormRef.UserForm.CANCEL, this.onCancel, this);
    }

    /**
     * Called when a user is added using the form.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onAdd(type:string, properties:any):void {
        var user:userVOReference.UserVO = this.getUserForm().getUser();
        this.userProxy.addItem(user);
        this.sendNotification(notificationNamesRef.NotificationNames.USER_ADDED, user);

        var userForm:userFormRef.UserForm = this.getUserForm();
        userForm.clearForm();
        userForm.setEnabled(false);
        userForm.setMode(userFormRef.UserForm.MODE_ADD);
    }

    /**
     * Called when a user is updated using the form.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onUpdate(type:string, properties:any):void {
        var user:userVOReference.UserVO = this.getUserForm().getUser();
        this.userProxy.updateItem(user);
        this.sendNotification(notificationNamesRef.NotificationNames.USER_UPDATED, user);

        var userForm:userFormRef.UserForm = this.getUserForm();
        userForm.clearForm();
        userForm.setEnabled(false);
        userForm.setMode(userFormRef.UserForm.MODE_ADD);
    }

    /**
     * Called when modifications made to a user in the form are canceled.
     *
     * @param type
     *        Type of the event dispatched.
     *
     * @param properties
     *        An anonymous object associated to the event dispatched.
     */
    private onCancel(type:string, properties:any):void {
        this.sendNotification(notificationNamesRef.NotificationNames.CANCEL_SELECTED);
        var userForm:userFormRef.UserForm = this.getUserForm();
        userForm.clearForm();
        userForm.setEnabled(false);
        userForm.setMode(userFormRef.UserForm.MODE_ADD);
    }

    /**
     * @override
     */
    listNotificationInterests():string[] {
        return [
            notificationNamesRef.NotificationNames.NEW_USER,
            notificationNamesRef.NotificationNames.USER_DELETED,
            notificationNamesRef.NotificationNames.USER_SELECTED
        ];
    }

    /**
     * @override
     */
    handleNotification(note:puremvc.INotification):void {
        var userForm:userFormRef.UserForm = this.getUserForm();

        var user:userVOReference.UserVO;
        switch (note.getName()) {
            case notificationNamesRef.NotificationNames.NEW_USER:
                userForm.setUser(note.getBody());
                userForm.setMode(userFormRef.UserForm.MODE_ADD);
                userForm.setEnabled(true);
                break;

            case notificationNamesRef.NotificationNames.USER_DELETED:
                userForm.clearForm();
                userForm.setEnabled(false);
                break;

            case notificationNamesRef.NotificationNames.USER_SELECTED:
                user = <userVOReference.UserVO> /*</>*/ note.getBody();

                userForm.clearForm();
                userForm.setUser(user);

                userForm.setMode(userFormRef.UserForm.MODE_EDIT);
                userForm.setEnabled(true);
                break;
        }
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
        this.getUserForm().destroy();
    }

    /*
     * Add event name.
     *
     * @constant
     */
    static ADD:string = "add";

    /*
     * Update event name.
     *
     * @constant
     */
    static UPDATE:string = "update";

    /*
     * Cancel event name.
     *
     * @constant
     */
    static CANCEL:string = "cancel";

    /*
     * Add mode name.
     *
     * @constant
     */
    static MODE_ADD:string = "modeAdd";

    /*
     * Edit mode name.
     *
     * @constant
     */
    static MODE_EDIT:string = "modeEdit";
}