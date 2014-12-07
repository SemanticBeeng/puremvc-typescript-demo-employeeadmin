///<reference path='../../../webc/DataBindingContext.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>

import ko = require('knockout');
import dbc = require('../../../webc/DataBindingContext');

import userVOReference = require('./../../model/vo/UserVO');
import deptEnumReference = require('./../../model/enum/DeptEnum');

export class UserFormDataBindingContext extends dbc.DataBindingContext {

    user:KnockoutObservable<userVOReference.UserVO>;

    _user():KnockoutObservable<userVOReference.UserVO> {
        return this.user;
    }

    public departments:KnockoutObservableArray<deptEnumReference.DeptEnum>;

    public confirm:KnockoutObservable<string>;

    public constructor(user:KnockoutObservable<userVOReference.UserVO>,
                       departments:KnockoutObservableArray<deptEnumReference.DeptEnum>,
                       confirm:KnockoutObservable<string>) {
        super();
        this.user = user;
        this.departments = departments;
        this.confirm = confirm;
    }
}

