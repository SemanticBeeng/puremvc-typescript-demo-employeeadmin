///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../enum/RoleEnum.ts'/>
/**
 * The value object in charge of transporting the data to describe each user roles.
 */

import ko = require('knockout');
import roleModelReference = require('./RoleModelVO');

export class RoleVO {
    /**
     * Unique name of the user to whom are associated the roles.
     */
    public Uname:KnockoutObservable<string> = ko.observable('');

    /**
     * The list of roles associated to the user.
     */
    public Roles:KnockoutObservableArray<roleModelReference.RoleModelVO> = ko.observableArray([]);

    constructor() {
    }

    public init(data):void {
        if (data != null) {
            this.Uname(data.uname);
            for (var i in data.roles) {
                var roleModel = new roleModelReference.RoleModelVO();
                roleModel.Name(data.roles[i]);
                this.Roles.push(roleModel);
            }
        }
    }

    public toJS(): string{
        return ko.toJS(this);
    }
}