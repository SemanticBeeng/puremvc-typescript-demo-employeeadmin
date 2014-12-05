///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../enum/DeptEnum.ts'/>

/**
 * The value object in charge of transporting the data to describe each user of the application.
 */
import ko = require('knockout');
import deptEnumReference = require('./../enum/DeptEnum');

export class UserVO {
    /**
     * Unique name of the user.
     */
    public uname:KnockoutObservable<string>=ko.observable('');

    /**
     * First name of the user.
     */
    public fname:KnockoutObservable<string>=ko.observable('');

    /**
     * Last name of the user.
     */
    public lname:KnockoutObservable<string>=ko.observable('');

    /**
     * E-mail name of the user.
     */
    public email:KnockoutObservable<string>=ko.observable('');

    /**
     * Password name of the user.
     */
    public password:KnockoutObservable<string>=ko.observable('');

    /**
     * The <code>DeptEnum</code> item associated to the user.
     */
    public department:KnockoutObservable<deptEnumReference.DeptEnum> = ko.observable(deptEnumReference.DeptEnum.NONE_SELECTED);
    public  departmentId:KnockoutObservable<number> = ko.observable(-1);

    /**
     * Indicate if the data shared by the value object are valid.
     *
     * @return
     *        The data shared by the value object are valid.
     */
    getIsValid():boolean {
        return    this.uname() != ""
            &&
            this.password() != ""
            &&
            this.department() != deptEnumReference.DeptEnum.NONE_SELECTED
            ;

    }

    /**
     * Return the complete name for this user.
     *
     * @return
     *        The complete name for this user.
     */
    getGivenName():string {
        return this.lname() + ", " + this.fname();
    }

    init(jsonData):void{
        this.uname(jsonData.uname);
        this.fname(jsonData.fname);
        this.lname(jsonData.lname);
        this.department(jsonData.department);
        if(this.department!=null){
            this.departmentId(this.department().ordinal);
        }
        this.email(jsonData.email);
        this.password(jsonData.password);
    }

}