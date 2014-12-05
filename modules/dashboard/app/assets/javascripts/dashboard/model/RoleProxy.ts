///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='enum/RoleEnum.ts'/>
///<reference path='vo/RoleVO.ts'/>
///<reference path='vo/UserVO.ts'/>

/**
 * PureMVC <code>Proxy</code> class object used to control the user roles list of the application.
 */

import roleVOReference = require('./vo/RoleVO');
import userVOReference = require('./vo/UserVO');
import roleEnumReference = require('./enum/RoleEnum');

export class RoleProxy
		extends puremvc.Proxy {
    /**
     * Get the role list.
     *
     * @return
     *        The role list.
     */
    getRoles():roleVOReference.RoleVO[] {
        return <roleVOReference.RoleVO[]>/*</>*/ this.data;
    }

    /**
     * Add a role to the list.
     *
     * @param role
     *        The role to add.
     */
    addItem(role:roleVOReference.RoleVO):void {
        this.getRoles().push(role);
    }

    /**
     * Remove a role from the list.
     *
     * @param uname
     *        The user name associated to the role to remove.
     */
    deleteItem(uname:string):void {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        for (var i:number = 0; i < roles.length; i++) {
            if (roles[i].uname() === uname) {
                roles.splice(i, 1);
                break;
            }
        }
    }

    /**
     * Determine if the user has a given role.
     *
     * @param user
     *        The user for whom to search for the role.
     *
     * @param role
     *        The role to search for.
     *
     * @return
     *        The user has the given role.
     */
    doesUserHaveRole(user:userVOReference.UserVO, role:roleEnumReference.RoleEnum):boolean {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        var hasRole:boolean = false;
        for (var i:number = 0; i < roles.length; i++) {
            if (roles[i].uname() === user.uname) {
                var userRoles:roleEnumReference.RoleEnum[] = roles[i].roles();
                for (var j:number = 0; j < userRoles.length; j++) {
                    var roleEnum:roleEnumReference.RoleEnum = userRoles[j];
                    if (roleEnum.equals(role)) {
                        hasRole = true;
                        break;
                    }
                }
                break;
            }
        }
        return hasRole;
    }

    /**
     * Add a role to a user.
     *
     * @param user
     *        The user to whom to add a role.
     *
     * @param role
     *        The role to add.
     */
    addRoleToUser(user:userVOReference.UserVO, role:roleEnumReference.RoleEnum):void {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        var result:boolean = false;
        if (!this.doesUserHaveRole(user, role)) {
            for (var i:number = 0; i < roles.length; i++) {
                if (roles[i].uname() == user.uname) {
                    var userRoles:roleEnumReference.RoleEnum[] = roles[i].roles();
                    userRoles.push(role);
                    result = true;
                    break;
                }
            }
        }
    }

    /**
     * Remove a role from a user.
     *
     * @param user
     *        The user to whom remove the role.
     *
     * @param role
     *        The role to remove.
     */
    removeRoleFromUser(user:userVOReference.UserVO, role:roleEnumReference.RoleEnum):void {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        if (this.doesUserHaveRole(user, role)) {
            for (var i:number = 0; i < roles.length; i++) {
                if (roles[i].uname() === user.uname) {
                    var userRoles:roleEnumReference.RoleEnum[] = roles[i].roles();
                    for (var j:number = 0; j < userRoles.length; j++) {
                        var roleEnum:roleEnumReference.RoleEnum = userRoles[j];
                        if (roleEnum.equals(role)) {
                            userRoles.splice(j, 1);
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }

    /**
     * Get a user's roles.
     *
     * @param uname
     *        The user unique name.
     *
     * @return
     *        The user's role list.
     */
    getUserRoles(uname:string):roleEnumReference.RoleEnum[] {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        var userRoles:roleEnumReference.RoleEnum[] = [];
        for (var i:number = 0; i < roles.length; i++) {
            if (roles[i].uname() === uname) {
                userRoles = roles[i].roles();
                break;
            }
        }

        return userRoles;
    }
}