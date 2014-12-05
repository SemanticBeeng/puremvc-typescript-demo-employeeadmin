///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
///<reference path='../../model/vo/UserVO.ts'/>
///<reference path='UiComponent.ts'/>

/**
 * The UI component in charge of the <em>User List</em>.
 */
import ko = require('knockout');
import uiComponentRef = require('./UiComponent');
import userVOReference = require('./../../model/vo/UserVO');
import roleVOReference = require('./../../model/vo/RoleVO');
import roleEnumReference = require('./../../model/enum/RoleEnum');
import deptEnumReference = require('./../../model/enum/DeptEnum');

export class UserList
		extends uiComponentRef.UiComponent
	{

		/**
		 * The user list panel HTML element.
		 */
		private userListPanel:JQuery = null;

		private selectedUser:KnockoutObservable<string> = ko.observable("");

		public users:KnockoutObservableArray<userVOReference.UserVO> = ko.observableArray([]);

		public usersTotal:KnockoutObservable<number> = ko.observable(0);

		public isDeleteButtonEnabled:KnockoutObservable<boolean> = ko.observable(false);

		/**
		 * Constructs a <code>UserList</code> instance.
		 *
		 * @param view
		 * 		The jQuery element giving access to the corresponding UI HTML element in the page.
		 */
		constructor() {
			super();

			$.ajax({
				context: this,
				type: "GET",
				url: "assets/tmpl/userList.html",
				success: this.templateLoaded,
				error: null,
				complete: null
			});
		}

		private templateLoaded(data):void {

			var x = $.parseHTML(data);
			$('#listPanelWrapper').append(x);

			this.userListPanel = $('.user-list-panel');

			ko.applyBindings(this,document.getElementById("userListPanel"));
		}

		/**
		 * Initialize references to DOM elements using jQuery.
		 */

		/**
		 * Bind events to their listeners.
		 */

		/**
		 * Remove any references used by the component to help garbage collection.
		 */
		destroy():void
		{
			super.destroy();
		}

		/**
		 * Add users from a list to the <SELECT> component.
		 *
		 * @param {Array} userList
		 * 		The user list to set.
		 */
		setUsers( userList ):void
		{
			this.users.push.apply(this.users, userList);

			this.usersTotal(userList.length);
		}

		/**
		 * Return current selected user in user list.
		 *
		 * Note that <code>jQgrid v3.6</code> cannot embed any external data to transport the
		 * <code>UserVo</code>. So it is best to return <code>uname</code>.
		 *
		 * @return
		 * 		The user name selected in the user list.
		 */
		getSelectedUser():string
		{
			return this.selectedUser();
		}

		/**
		 * Remove selection in the user list.
		 */
		deSelect():void
		{
			this.selectedUser = null;

			this.isDeleteButtonEnabled(false);
		}

		/**
		 * List row selection event listener.
		 *
		 * @param id
		 * 		The id of the selected row.
		 */
		public userList_selectHandler( user:userVOReference.UserVO, parent:UserList ):void
		{
			parent.selectedUser(user.uname());
			parent.dispatchEvent( UserList.SELECT );

			parent.isDeleteButtonEnabled(true);
		}

		/**
		 * New button click event listener.
		 */
		public newButton_clickHandler():void
		{
			this.deSelect();
			this.dispatchEvent( UserList.NEW );
		}

		/**
		 * New button click event listener.
		 */
		private deleteButton_clickHandler():void
		{
			this.dispatchEvent( UserList.DELETE );
		}

		/*
		 * New event name.
		 *
		 * @constant
		 */
		static NEW:string 		= "new";

		/*
		 * Delete event name.
		 *
		 * @constant
		 */
		static DELETE:string 	= "delete";

		/*
		 * Select event name.
		 *
		 * @constant
		 */
		static SELECT:string 	= "select";
}