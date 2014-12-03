///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='../enum/RoleEnum.ts'/>
/**
 * The value object in charge of transporting the data to describe each user roles.
 */

import roleEnumReference = require('./../enum/RoleEnum');

export class RoleVO {
    /**
     * Unique name of the user to whom are associated the roles.
     */
    uname:string = "";

    /**
     * The list of roles associated to the user.
     */
    roles:roleEnumReference.RoleEnum[] = [];
}