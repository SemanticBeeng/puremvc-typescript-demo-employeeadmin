///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../../model/enum/DeptEnum.ts'/>
///<reference path='../../model/enum/RoleEnum.ts'/>
///<reference path='../../model/vo/RoleVO.ts'/>
///<reference path='../../model/vo/UserVO.ts'/>
///<reference path='UiComponent.ts'/>

/**
 * The UI component in charge of the <em>user form</em>.
 */
import ko = require('knockout');
import uiComponentRef = require('./UiComponent');
import userVOReference = require('./../../model/vo/UserVO');
import roleVOReference = require('./../../model/vo/RoleVO');
import roleEnumReference = require('./../../model/enum/RoleEnum');
import deptEnumReference = require('./../../model/enum/DeptEnum');

export class UserForm
		extends uiComponentRef.UiComponent {
    /**
     * The user form panel HTML element.
     */
    private userFormPanel:JQuery = null;


    public user:KnockoutObservable<userVOReference.UserVO> = ko.observable(new userVOReference.UserVO());

    /**
     * The roles list for the selected user.
     */
    private userRoles:KnockoutObservableArray<roleVOReference.RoleVO> = ko.observableArray([]);

    private departments : KnockoutObservableArray<deptEnumReference.DeptEnum> = ko.observableArray([]);

    /**
     * The MODE_ADD or MODE_EDIT user mode.
     */
    private mode:KnockoutObservable<string> = ko.observable("");

    private isEnabled : KnockoutObservable<boolean> = ko.observable(false);

    private addEditButtonText : KnockoutObservable<string> = ko.observable("Add");

    private confirm:KnockoutObservable<string> = ko.observable("");
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
        debugger;

        var x = $.parseHTML(data);
        $('.application').append(x);

        this.userFormPanel = $('.user-form-panel');

        ko.applyBindings(this,document.getElementById("userFormPanel"));

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
        this.departments.push.apply(this.departments, deptEnumList);
    }

    /**
     * Set the user used to populate the form.
     *
     * @param user
     *        The currently selected user.
     */
    setUser(user:userVOReference.UserVO):void {
        this.user(user);

        if (!user)
            this.clearForm();
        else {
            this.fillList(deptEnumReference.DeptEnum.getComboList());
            this.confirm(this.user().password());
        }
    }

    getUser():userVOReference.UserVO {
        return this.user();
    }
    /**
     * Clear the whole form.
     */
    clearForm():void {
        this.user(new userVOReference.UserVO());
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
        if (this.getErrors())
            return;

        var user:userVOReference.UserVO = this.getUser();
        if (user.getIsValid()) {
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
        if(this.user()!=null) {
            if (this.user().uname() == "")
                this.setFieldError("uname", error = true);
            else
                this.setFieldError("uname", false);

            if (this.user().password() == "")
                this.setFieldError("password", error = true);
            else
                this.setFieldError("password", false);

            if (this.user().password() != "" && this.confirm() != this.user().password())
                this.setFieldError("confirm", error = true);
            else
                this.setFieldError("confirm", false);

            if (this.user().department().ordinal = deptEnumReference.DeptEnum.NONE_SELECTED.ordinal)
                this.setFieldError("department", error = true);
            else
                this.setFieldError("department", false);

            /**
             * The e-mail verification rule is the one used by HTML5 e-mail inputs.
             * @see http://stackoverflow.com/questions/7786058/find-the-regex-used-by-html5-forms-for-validation
             */
            var emailReg:RegExp = /^[a-z0-9!#$%&'*+\/=?^_`\{|\}~\.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/;
            if (this.user().email() != "" && !emailReg.test(this.user().email()))
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