///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jquery.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>

///<reference path='UiComponent.ts'/>
///<reference path='../../model/vo/RoleVO.ts'/>
///<reference path='../../model/vo/RoleModelVO.ts'/>
///<reference path='../../model/vo/UserVO.ts'/>
///<reference path='../../model/enum/RoleEnum.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>

/**
 * The UI component in charge of the <em>role panel</em>.
 */

import ko = require('knockout');
import uiComponentRef = require('./UiComponent');
import userVOReference = require('./../../model/vo/UserVO');
import roleModelVOReference = require('./../../model/vo/RoleModelVO');
import roleEnumReference = require('./../../model/enum/RoleEnum');

export class RolePanel
		extends uiComponentRef.UiComponent {
    /**
     * Currently selected user.
     */
    public User:KnockoutObservable<userVOReference.UserVO> = ko.observable(null);

    public UserName:KnockoutComputed<string> = null;

    /**
     * The user roles list.
     */
    public UserRoles:KnockoutObservableArray<roleModelVOReference.RoleModelVO> = ko.observableArray([]);

    /**
     * Currently selected role.
     */
    public SelectedRole:KnockoutComputed<roleModelVOReference.RoleModelVO> = null;

    /**
     * All roles.
     */
    public RolesCollection:KnockoutComputed<roleEnumReference.RoleEnum[]> = null;

    /**
     * Currently selected role to add.
     */
    public SelectedRoleToAdd:KnockoutObservable<roleEnumReference.RoleEnum> = ko.observable(null);

    public CanAdd: KnockoutComputed<boolean>;

    public CanRemove: KnockoutObservable<boolean> = ko.observable(false);

    /**
     * Constructs a <code>RolePanel</code> instance.
     *
     * @param view
     *        The jQuery element giving access to the corresponding UI HTML element in the page.
     */
    constructor() {
        super();

        var self = this;

        this.UserName = ko.computed(function(){
            if(self.User() != null) return self.User().fname() + " " + self.User().lname();
            else return '';
        });

        this.SelectedRole = ko.computed(function(){
            if(self.UserRoles() != null)
            {
                var x:roleModelVOReference.RoleModelVO = ko.utils.arrayFirst(self.UserRoles(), function(each:roleModelVOReference.RoleModelVO){
                    if(each.IsSelected()) return each;
                });
                if(x != null) self.CanRemove(true);
                return x;
            }
            else return null;
        });

        this.RolesCollection = ko.computed(function(){
            var values = [];
            var roleEnumList:roleEnumReference.RoleEnum[] = roleEnumReference.RoleEnum.getComboList();
            for(var i in roleEnumList)
            {
                values.push(roleEnumList[i].value);
            }
            return values;
        });

        this.CanAdd = ko.computed(function(){
            if(self.SelectedRoleToAdd() == null || self.SelectedRoleToAdd() == roleEnumReference.RoleEnum.NONE_SELECTED.value) return false;
            else {
                if(self.UserRoles() == null || self.User() == null) return false;

                var alreadyInList:boolean = false;
                for (var i:number = 0; i < self.UserRoles().length; i++) {
                    var role:roleModelVOReference.RoleModelVO = self.UserRoles()[i];
                    if (role.Name() == self.SelectedRoleToAdd()) {
                        alreadyInList = true;
                        break;
                    }
                }
                if(alreadyInList)
                {
                    self.CanRemove(true);
                    return false;
                }
                else
                {
                    self.CanRemove(false);
                    ko.utils.arrayForEach(self.UserRoles(), function(each){
                        each.IsSelected(false);
                    });
                    return true;
                }
            }
        });

        $.ajax({
            context: this,
            type: "GET",
            url: "assets/tmpl/roleList.html",
            success: this.templateLoaded,
            error: null,
            complete: null
        });
    }

    private templateLoaded(data):void {
        var x = $.parseHTML(data);
        $('.application').append(x);

        ko.applyBindings(this, document.getElementById('rolePanel'));
    }

    /**
     * Set the displayed user roles list.
     *
     * @param userRoles
     *        The role list associated to the currently selected user.
     */
    setUserRoles(userRoles:roleModelVOReference.RoleModelVO[]):void {
        if (!userRoles)
            return;

        this.UserRoles([]);
        var aux = ko.utils.arrayMap(userRoles, function (each) {
            return each;
        });

        this.UserRoles.push.apply(this.UserRoles, aux);
    }

    selectRole(role:roleModelVOReference.RoleModelVO):void{
        var x = ko.dataFor(document.getElementById('rolePanel'))
        ko.utils.arrayForEach(x.UserRoles(), function(each:roleModelVOReference.RoleModelVO){
            each.IsSelected(false);
        });
        role.IsSelected(true);
    }

    /**
     * Clear the panel from all its displayed data.
     */
    clearForm():void {
        this.User(null);
        this.UserRoles(null);
        this.SelectedRoleToAdd(null);
    }

    reset():void {
        this.SelectedRoleToAdd(null);
        if (this.UserRoles() != null && this.UserRoles().length > 0)
            ko.utils.arrayForEach(this.UserRoles(), function (each) {
                each.IsSelected(false);
            });
    }

    /**
     * Remove any references used by the component to help garbage collection.
     */
    destroy():void {
        super.destroy();
    }

    /**
     * Add button onclick event listener.
     */
    private addRoleButton_clickHandler():void {
        this.dispatchEvent(RolePanel.ADD);
    }

    /**
     * Remove button onclick event listener.
     */
    private removeRoleButton_clickHandler():void {
        this.dispatchEvent(RolePanel.REMOVE);
    }

    /**
     * Add event name.
     *
     * @constant
     */
    static ADD:string = "add";

    /**
     * Remove event name.
     *
     * @constant
     */
    static REMOVE:string = "remove";

    /**
     * Add mode name.
     *
     * @constant
     */
    static ADD_MODE:string = "addMode";

    /**
     * Remove mode name.
     *
     * @constant
     */
    static REMOVE_MODE:string = "removeMode";
}