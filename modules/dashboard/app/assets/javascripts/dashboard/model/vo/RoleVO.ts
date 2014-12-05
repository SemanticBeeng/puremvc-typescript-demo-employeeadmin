///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../enum/RoleEnum.ts'/>
/**
 * The value object in charge of transporting the data to describe each user roles.
 */

import ko = require('knockout');
import roleEnumReference = require('./../enum/RoleEnum');

export class RoleVO {
    /**
     * Unique name of the user to whom are associated the roles.
     */
    public uname:KnockoutObservable<string>;

    /**
     * The list of roles associated to the user.
     */
    public roles:KnockoutObservableArray<roleEnumReference.RoleEnum>;

    constructor() {
        this.uname = ko.observable();
        this.roles = ko.observableArray();
    }

    public init(data):void {
        if (data != null) {
            this.uname(data.uname);
            for (var i in data.roles) {
                this.roles.push(data.roles[i]);
            }
        }
    }

    public toJS(): string{
        return ko.toJS(this);
    }
}