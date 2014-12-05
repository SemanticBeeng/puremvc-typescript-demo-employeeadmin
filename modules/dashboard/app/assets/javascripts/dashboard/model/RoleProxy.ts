///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='enum/RoleEnum.ts'/>
///<reference path='vo/RoleVO.ts'/>
///<reference path='vo/RoleModelVO.ts'/>
///<reference path='vo/UserVO.ts'/>

/**
 * PureMVC <code>Proxy</code> class object used to control the user roles list of the application.
 */

import roleVOReference = require('./vo/RoleVO');
import userVOReference = require('./vo/UserVO');
import roleModelVOReference = require('./vo/RoleModelVO');
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
            if (roles[i].Uname() === uname) {
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
    doesUserHaveRole(user:userVOReference.UserVO, role:roleModelVOReference.RoleModelVO):boolean {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        var hasRole:boolean = false;
        for (var i:number = 0; i < roles.length; i++) {
            if (roles[i].Uname() === user.uname()) {
                var userRoles:roleModelVOReference.RoleModelVO[] = roles[i].Roles();
                for (var j:number = 0; j < userRoles.length; j++) {
                    var roleEnum:roleModelVOReference.RoleModelVO = userRoles[j];
                    if (roleEnum.Name() == role.Name()) {
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
    addRoleToUser(user:userVOReference.UserVO, role:roleModelVOReference.RoleModelVO):void {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        var result:boolean = false;
        if (!this.doesUserHaveRole(user, role)) {
            for (var i:number = 0; i < roles.length; i++) {
                if (roles[i].Uname() == user.uname()) {
                    var userRoles:roleModelVOReference.RoleModelVO[] = roles[i].Roles();
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
    removeRoleFromUser(user:userVOReference.UserVO, role:roleModelVOReference.RoleModelVO):void {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        if (this.doesUserHaveRole(user, role)) {
            for (var i:number = 0; i < roles.length; i++) {
                if (roles[i].Uname() === user.uname()) {
                    var userRoles:roleModelVOReference.RoleModelVO[] = roles[i].Roles();
                    for (var j:number = 0; j < userRoles.length; j++) {
                        var roleEnum:roleModelVOReference.RoleModelVO = userRoles[j];
                        if (roleEnum.Name() == role.Name()) {
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
    getUserRoles(uname:string):roleModelVOReference.RoleModelVO[] {
        var roles:roleVOReference.RoleVO[] = this.getRoles();
        var userRoles:roleModelVOReference.RoleModelVO[] = [];
        for (var i:number = 0; i < roles.length; i++) {
            if (roles[i].Uname() === uname) {
                userRoles = roles[i].Roles();
                break;
            }
        }

        return userRoles;
    }
}