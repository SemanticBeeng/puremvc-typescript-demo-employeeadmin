///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../abc/ProxyNames.ts'/>

///<reference path='../model/vo/UserVO.ts'/>
///<reference path='../model/vo/RoleVO.ts'/>
///<reference path='../model/UserProxy.ts'/>
///<reference path='../model/RoleProxy.ts'/>

/**
 * Command used to delete a user from the main users list.
 */
import userProxyRef = require('./../model/UserProxy');
import roleProxyRef = require('./../model/RoleProxy');

import userVOReference = require('./../model/vo/UserVO');

import proxyNamesRef = require('./../abc/ProxyNames');
import notificationNamesRef = require('./../abc/NotificationNames');

export class DeleteUserCommand
		extends puremvc.SimpleCommand {
    /**
     * @override
     */
    execute(note:puremvc.INotification):void {
        var user:userVOReference.UserVO = note.getBody();
        debugger;
        var userProxy:userProxyRef.UserProxy = <userProxyRef.UserProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.USER_PROXY);
        var roleProxy:roleProxyRef.RoleProxy = <roleProxyRef.RoleProxy> /*</>*/ this.facade.retrieveProxy(proxyNamesRef.ProxyNames.ROLE_PROXY);

        userProxy.deleteItem(user.uname);
        roleProxy.deleteItem(user.uname);

        this.sendNotification(notificationNamesRef.NotificationNames.USER_DELETED);
    }
}