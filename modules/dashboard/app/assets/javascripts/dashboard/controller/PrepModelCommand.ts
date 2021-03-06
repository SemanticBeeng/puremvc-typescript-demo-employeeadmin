///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='../abc/ProxyNames.ts'/>
///<reference path='../model/vo/UserVO.ts'/>
///<reference path='../model/vo/RoleVO.ts'/>
///<reference path='../model/UserProxy.ts'/>
///<reference path='../model/RoleProxy.ts'/>

/**
 * Configure and initialize model for the application.
 */

import userProxyRef = require('./../model/UserProxy');
import roleProxyRef = require('./../model/RoleProxy');

import userVOReference = require('./../model/vo/UserVO');
import roleVOReference = require('./../model/vo/RoleVO');

import roleEnumReference = require('./../model/enum/RoleEnum');
import deptEnumReference = require('./../model/enum/DeptEnum');

import proxyNamesRef = require('./../abc/ProxyNames');

export class PrepModelCommand
		extends puremvc.SimpleCommand {
    /**
     * @override
     */
    execute(note:puremvc.INotification):void {
        /*
         * Data initialization.
         */

        var userProxy:puremvc.IProxy = new userProxyRef.UserProxy(proxyNamesRef.ProxyNames.USER_PROXY, this.generateUsers());
        var roleProxy:puremvc.IProxy = new roleProxyRef.RoleProxy(proxyNamesRef.ProxyNames.ROLE_PROXY, this.generateRoles());

        /*
         * Proxies initialization.
         */
        this.facade.registerProxy(userProxy);
        this.facade.registerProxy(roleProxy);
    }

    /**
     * Generates and returns a dummy users list.
     *
     * @return
     *        The generated dummy users list.
     */
    generateUsers():userVOReference.UserVO[] {
        var user:userVOReference.UserVO;
        var users:userVOReference.UserVO[] = [];

        var userJs = [{
            uname :"lstooge",
            fname : "Larry",
            lname : "StoogeX",
            email : "larry@stooges.com",
            password : "ijk456",
            department : deptEnumReference.DeptEnum.ACCT
        },
            {
                uname :"cstooge",
                fname : "Curly",
                lname : "Stooge",
                email : "curly@stooges.com",
                password : "xyz987",
                department : deptEnumReference.DeptEnum.SALES
            },
            {
                uname :"mstooge",
                fname : "Moe",
                lname : "Stooge",
                email : "moe@stooges.com",
                password : "abc123",
                department : deptEnumReference.DeptEnum.PLANT
            },
        ];

        for(var i in userJs){
            user = new userVOReference.UserVO();
            user.init(userJs[i]);
            users.push(user);
        }

        return users;
    }

    /**
     * Generates and returns a dummy roles list.
     *
     * @return
     *        The generated dummy roles list.
     */
    generateRoles():roleVOReference.RoleVO[] {

        var role:roleVOReference.RoleVO;
        var roles:roleVOReference.RoleVO[] = [];

        /**
         * simulates JSON data coming from server
        */
        var rolesComingFromServerAsJSON = [
            {
                uname: 'lstooge',
                roles: [roleEnumReference.RoleEnum.PAYROLL, roleEnumReference.RoleEnum.EMP_BENEFITS]
            },
            {
                uname: 'cstooge',
                roles: [roleEnumReference.RoleEnum.ACCT_PAY, roleEnumReference.RoleEnum.ACCT_RCV, roleEnumReference.RoleEnum.GEN_LEDGER]
            },
            {
                uname: 'mstooge',
                roles: [roleEnumReference.RoleEnum.INVENTORY, roleEnumReference.RoleEnum.PRODUCTION, roleEnumReference.RoleEnum.SALES, roleEnumReference.RoleEnum.SHIPPING]
            }
        ];

        for(var i in rolesComingFromServerAsJSON)
        {
            role = new roleVOReference.RoleVO();
            role.init(rolesComingFromServerAsJSON[i]);
            roles.push(role);
        }

        return roles;
    }
}