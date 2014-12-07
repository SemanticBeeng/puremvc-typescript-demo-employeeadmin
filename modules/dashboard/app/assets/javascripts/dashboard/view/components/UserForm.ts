///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../../model/enum/DeptEnum.ts'/>
///<reference path='../../model/enum/RoleEnum.ts'/>
///<reference path='../../model/vo/RoleVO.ts'/>
///<reference path='../../model/vo/UserVO.ts'/>
///<reference path='UiComponent.ts'/>
///<reference path='UserFormDataBindingContext.ts'/>

/**
 * The UI component in charge of the <em>user form</em>.
 */
import ko = require('knockout');
import uiComponentRef = require('./UiComponent');
import userVOReference = require('./../../model/vo/UserVO');
import roleVOReference = require('./../../model/vo/RoleVO');
import roleEnumReference = require('./../../model/enum/RoleEnum');
import deptEnumReference = require('./../../model/enum/DeptEnum');

import dbc = require('./UserFormDataBindingContext');

export class UserForm extends uiComponentRef.UiComponent {
    /**
     * The user form panel HTML element.
     */
    private userFormPanel:JQuery = null;

    /**
     * The MODE_ADD or MODE_EDIT user mode.
     */
    private mode:KnockoutObservable<string> = ko.observable("");

    private isEnabled:KnockoutObservable<boolean> = ko.observable(false);

    private addEditButtonText:KnockoutObservable<string> = ko.observable("Add");

    public dataBindingContext:dbc.UserFormDataBindingContext = new dbc.UserFormDataBindingContext();

    public getBindingContext():dbc.UserFormDataBindingContext {
        return this.dataBindingContext;
    }

    /**
     * Constructs a <code>UserForm</code> instance.
     *
     * @param view
     *        The jQuery element giving access to the corresponding UI HTML element in the page.
     */
    constructor() {
        super();

        $.ajax({
            context: this,
            type: "GET",
            url: "assets/tmpl/userForm.html",
            success: this.templateLoaded,
            error: null,
            complete: null
        });
    }

    private templateLoaded(data):void {
        var x = $.parseHTML(data);
        $('.application').append(x);

        this.userFormPanel = $('.user-form-panel');

        /**
         *
         */
        ko.applyBindings({_ : this.dataBindingContext}, document.getElementById("userFormPanel"));

        this.setEnabled(false);
    }

    /**
     * Initialize references to DOM elements using jQuery.
     */

    /**
     * Add items from <code>DeptEnum</code> to the corresponding list UI component.
     *
     * @param deptEnumList
     *        List of <code>DeptEnum</code> items or an empty array to empty the list UI component
     *        content.
     */
    private fillList(deptEnumList:deptEnumReference.DeptEnum[]):void {
        this.dataBindingContext.departments.push.apply(this.dataBindingContext.departments, deptEnumList);
    }

    /**
     * Set the user used to populate the form.
     *
     * @param user
     *        The currently selected user.
     */
    setUser(user:userVOReference.UserVO):void {
        this.dataBindingContext.setUser(user);

        if (!user)
            this.clearForm();
        else {
            this.fillList(deptEnumReference.DeptEnum.getComboList());
            if (this.dataBindingContext.user().department() != null) {
                this.dataBindingContext.user().departmentId(this.dataBindingContext.user().department().ordinal);
            }
            this.dataBindingContext.confirm(this.dataBindingContext.user().password());
        }
    }

    //getUser():userVOReference.UserVO {
    //    return this.dataBindingContext.user();
    //}

    /**
     * Clear the whole form.
     */
    clearForm():void {
        this.dataBindingContext.setUser(new userVOReference.UserVO());
        this.dataBindingContext.confirm('');
        this.fillList([]);
    }

    /**
     * Enable or disable the form.
     *
     * @param isEnabled
     *        The form must be enabled.
     */
    setEnabled(isEnabled:boolean):void {
        this.isEnabled(isEnabled);
    }

    /**
     * Set the form mode to <code>MODE_ADD</code> or <code>MODE_EDIT</code>.
     *
     * @param mode
     *        <code>MODE_ADD</code> or <code>MODE_EDIT</code> from mode
     */
    setMode(mode:string):void {
        this.mode(mode);

        switch (mode) {
            case UserForm.MODE_ADD:
                this.addEditButtonText("Add");
                break;

            case UserForm.MODE_EDIT:
                this.addEditButtonText("Save");
                break;
        }
    }

    /**
     * Remove any references used by the component to help garbage collection.
     */
    destroy():void {
        super.destroy();

    }

    /**
     * Submit the add or update.
     */
    private submitButton_clickHandler():void {
        var newDepartment = null;
        for (var i in this.dataBindingContext.departments()) {
            if (this.dataBindingContext.departments()[i].ordinal == this.dataBindingContext.user().departmentId()) {
                newDepartment = this.dataBindingContext.departments()[i];
                break;
            }
        }
        this.dataBindingContext.user().department(newDepartment);

        if (this.getErrors())
            return;

        if (this.dataBindingContext.user().getIsValid()) {
            if (this.mode() == UserForm.MODE_ADD)
                this.dispatchEvent(UserForm.ADD);
            else
                this.dispatchEvent(UserForm.UPDATE);
        }
    }

    /**
     * Cancel the add or update
     */
    private cancelButton_clickHandler():void {
        this.dispatchEvent(UserForm.CANCEL);
    }

    /**
     * Display errors associated with form fields and return if at least one field is in error.
     *
     * @return {bool}
     *        The form contains errors.
     */
    private getErrors():boolean {
        var error:boolean = false;
        var user = this.dataBindingContext.user();
        if (user != null) {
            if (user.uname() == "")
                this.setFieldError("uname", error = true);
            else
                this.setFieldError("uname", false);

            if (user.password() == "")
                this.setFieldError("password", error = true);
            else
                this.setFieldError("password", false);

            if (user.password() != "" && this.dataBindingContext.confirm() != user.password())
                this.setFieldError("confirm", error = true);
            else
                this.setFieldError("confirm", false);

            if (this.dataBindingContext.user().department().ordinal == deptEnumReference.DeptEnum.NONE_SELECTED.ordinal)
                this.setFieldError("department", error = true);
            else
                this.setFieldError("department", false);

            /**
             * The e-mail verification rule is the one used by HTML5 e-mail inputs.
             * @see http://stackoverflow.com/questions/7786058/find-the-regex-used-by-html5-forms-for-validation
             */
            var emailReg:RegExp = /^[a-z0-9!#$%&'*+\/=?^_`\{|\}~\.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/;
            if (this.dataBindingContext.user().email() != "" && !emailReg.test(this.dataBindingContext.user().email()))
                this.setFieldError("email", error = true);
            else
                this.setFieldError("email", false);
        }
        return error;
    }

    /**
     * Set or unset the error state on the uname field.
     *
     * @param {string} fieldName
     *        Name of the field to mark as (or not mark as) containing an error.
     *
     * @param {bool} error
     *        The field must be marked as containing an error.
     */
    private setFieldError(fieldName, error):void {
        var label:JQuery = this.userFormPanel.find('label[for="' + fieldName + '"]');
        var field:JQuery = this.userFormPanel.find("#" + fieldName);

        if (error) {
            label.addClass("fieldError");
            field.addClass("fieldError");
        }
        else {
            label.removeClass("fieldError");
            field.removeClass("fieldError");
        }
    }

    /*
     * Add event name.
     *
     * @constant
     */
    static ADD:string = "add";

    /*
     * Update event name.
     *
     * @constant
     */
    static UPDATE:string = "update";

    /*
     * Cancel event name.
     *
     * @constant
     */
    static CANCEL:string = "cancel";

    /*
     * Add mode name.
     *
     * @constant
     */
    static MODE_ADD:string = "modeAdd";

    /*
     * Edit event name.
     *
     * @constant
     */
    static MODE_EDIT:string = "modeEdit";
}