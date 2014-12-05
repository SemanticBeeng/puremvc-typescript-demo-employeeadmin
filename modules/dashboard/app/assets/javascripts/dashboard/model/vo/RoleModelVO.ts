///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../enum/RoleEnum.ts'/>
/**
 * The value object in charge of transporting the data to describe each user role.
 */

import ko = require('knockout');
import roleEnumReference = require('./../enum/RoleEnum');

export class RoleModelVO {

    /**
     * The list of roles associated to the user.
     */
    public Name:KnockoutObservable<roleEnumReference.RoleEnum> = ko.observable(null);

    /**
     * Role selected state.
     */
    public IsSelected:KnockoutObservable<boolean> = ko.observable(false);

    constructor() {
    }

    public toJS(): string{
        return ko.toJS(this);
    }
}