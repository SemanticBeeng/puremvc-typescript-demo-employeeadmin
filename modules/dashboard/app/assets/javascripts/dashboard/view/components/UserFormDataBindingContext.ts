///<reference path='../../../webc/DataBindingContext.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>

import ko = require('knockout');
import dbc = require('../../../webc/DataBindingContext');

import userVOReference = require('./../../model/vo/UserVO');
import deptEnumReference = require('./../../model/enum/DeptEnum');

export class UserFormDataBindingContext extends dbc.DataBindingContext {

    public user:KnockoutObservable<userVOReference.UserVO>;

    public departments:KnockoutObservableArray<deptEnumReference.DeptEnum>;

    public confirm:KnockoutObservable<string>;

    public constructor() {
        super();
        this.user = ko.observable(new userVOReference.UserVO());
        this.departments = ko.observableArray([]);
        //this.user.setProperty("confirmPassword", this.user.password);
        //@todo Object.defineProperty(this.user, "confirmPassword", {writable});
        this.confirm = ko.observable("");
    }

    /**
     *
     * @param user
     */
    public setUser(user:userVOReference.UserVO) {

        this.user(user);
    }

}

