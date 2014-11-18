if( typeof define === "function" )
{
	define( "EmployeeAdmin", ['puremvc'], function(puremvc)
	{
        /**
         * Defines <code>Notification</code>s names for the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var NotificationNames = (function () {
                function NotificationNames() {
                }
                NotificationNames.STARTUP = "startup";
                NotificationNames.NEW_USER = "newUser";
                NotificationNames.DELETE_USER = "deleteUser";
                NotificationNames.CANCEL_SELECTED = "cancelSelected";
                NotificationNames.USER_SELECTED = "userSelected";
                NotificationNames.USER_ADDED = "userAdded";
                NotificationNames.USER_UPDATED = "userUpdated";
                NotificationNames.USER_DELETED = "userDeleted";
                NotificationNames.ADD_ROLE = "addRole";
                NotificationNames.ADD_ROLE_RESULT = "addRoleResult";
                return NotificationNames;
            })();
            EmployeeAdmin.NotificationNames = NotificationNames;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        /**
         * Defines <code>Proxy</code>s names for the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var ProxyNames = (function () {
                function ProxyNames() {
                }
                ProxyNames.ROLE_PROXY = "roleProxy";
                ProxyNames.USER_PROXY = "userProxy";
                return ProxyNames;
            })();
            EmployeeAdmin.ProxyNames = ProxyNames;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        /**
         * An enumeration of department items.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var DeptEnum = (function () {
                /**
                 * Constructs a <code>DeptEnum</code> instance.
                 *
                 * @param value
                 * 		Value shared by each enum item.
                 *
                 * @param ordinal
                 * 		Index of the item in the list.
                 */
                function DeptEnum(value, ordinal) {
                    /**
                     * The <code>DeptEnum</code> entry identifier.
                     *
                     * @type
                     */
                    this.ordinal = null;
                    /**
                     * The <code>DeptEnum</code> entry value.
                     *
                     * @type
                     */
                    this.value = null;
                    this.value = value;
                    this.ordinal = ordinal;
                }
                /**
                 * Compare a <code>DeptEnum</code> object to the current one to check for their equality.
                 *
                 * @param deptEnum
                 * 		The <code>DeptEnum</code> item to compare to the current.
                 *
                 * @return
                 * 		The compared <code>DeptEnum</code> is equal to the current.
                 */
                DeptEnum.prototype.equals = function (deptEnum) {
                    return (this.ordinal == deptEnum.ordinal && this.value == deptEnum.value);
                };
                /**
                 * Returns the department list excluding the <code>DeptEnum.NONE_SELECTED</code> item used
                 * to fill the combo box.
                 *
                 * @return
                 * 		The department list excluding the <code>DeptEnum.NONE_SELECTED</code> item.
                 */
                DeptEnum.getList = function () {
                    return [
                        DeptEnum.ACCT,
                        DeptEnum.SALES,
                        DeptEnum.PLANT
                    ];
                };
                /**
                 * Returns the department list including the <code>DeptEnum.NONE_SELECTED</code> item used
                 * to fill the combo box.
                 *
                 * @return
                 * 		The department list including the <code>DeptEnum.NONE_SELECTED</code> item.
                 */
                DeptEnum.getComboList = function () {
                    var cList = DeptEnum.getList();
                    cList.unshift(DeptEnum.NONE_SELECTED);
                    return cList;
                };
                ////////////////////////////////////////////////////////////////////////////////////////////
                // STATIC
                ////////////////////////////////////////////////////////////////////////////////////////////
                DeptEnum.NONE_SELECTED = new DeptEnum("Select a department", -1);
                DeptEnum.ACCT = new DeptEnum("Accounting", 0);
                DeptEnum.SALES = new DeptEnum("Sales", 1);
                DeptEnum.PLANT = new DeptEnum("Plant", 2);
                DeptEnum.SHIPPING = new DeptEnum("Shipping", 3);
                DeptEnum.QC = new DeptEnum("Quality Control", 4);
                return DeptEnum;
            })();
            EmployeeAdmin.DeptEnum = DeptEnum;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../enum/DeptEnum.ts'/>
        /**
         * The value object in charge of transporting the data to describe each user of the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UserVO = (function () {
                function UserVO() {
                    /**
                     * Unique name of the user.
                     */
                    this.uname = "";
                    /**
                     * First name of the user.
                     */
                    this.fname = "";
                    /**
                     * Last name of the user.
                     */
                    this.lname = "";
                    /**
                     * E-mail name of the user.
                     */
                    this.email = "";
                    /**
                     * Password name of the user.
                     */
                    this.password = "";
                    /**
                     * The <code>DeptEnum</code> item associated to the user.
                     */
                    this.department = EmployeeAdmin.DeptEnum.NONE_SELECTED;
                }
                /**
                 * Indicate if the data shared by the value object are valid.
                 *
                 * @return
                 * 		The data shared by the value object are valid.
                 */
                UserVO.prototype.getIsValid = function () {
                    return this.uname != "" && this.password != "" && this.department != EmployeeAdmin.DeptEnum.NONE_SELECTED;
                };
                /**
                 * Return the complete name for this user.
                 *
                 * @return
                 * 		The complete name for this user.
                 */
                UserVO.prototype.getGivenName = function () {
                    return this.lname + ", " + this.fname;
                };
                return UserVO;
            })();
            EmployeeAdmin.UserVO = UserVO;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        /**
         * An enumeration of role items.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var RoleEnum = (function () {
                /**
                 * Constructs a <code>RoleEnum</code> instance.
                 *
                 * @param value
                 * 		Value shared by each enum item.
                 *
                 * @param ordinal
                 * 		Index of the item in the list.
                 */
                function RoleEnum(value, ordinal) {
                    /**
                     * The <code>RoleEnum</code> entry identifier.
                     */
                    this.ordinal = null;
                    /**
                     * The <code>RoleEnum</code> entry value.
                     */
                    this.value = null;
                    this.value = value;
                    this.ordinal = ordinal;
                }
                /**
                 * Compare a <code>RoleEnum</code> object to the current one to check for their equality.
                 *
                 * @param roleEnum
                 * 		The <code>RoleEnum</code> item to compare to the current.
                 *
                 * @return
                 * 		The compared <code>RoleEnum</code> is equal to the current.
                 */
                RoleEnum.prototype.equals = function (roleEnum) {
                    return (this.ordinal == roleEnum.ordinal && this.value == roleEnum.value);
                };
                /**
                 * Returns the roles list excluding the <code>RoleEnum.NONE_SELECTED</code> item used to fill
                 * the combo box.
                 *
                 * @return
                 * 		The roles list excluding the <code>RoleEnum.NONE_SELECTED</code> item.
                 */
                RoleEnum.getList = function () {
                    return [
                        RoleEnum.ADMIN,
                        RoleEnum.ACCT_PAY,
                        RoleEnum.ACCT_RCV,
                        RoleEnum.EMP_BENEFITS,
                        RoleEnum.GEN_LEDGER,
                        RoleEnum.PAYROLL,
                        RoleEnum.INVENTORY,
                        RoleEnum.PRODUCTION,
                        RoleEnum.QUALITY_CTL,
                        RoleEnum.SALES,
                        RoleEnum.ORDERS,
                        RoleEnum.CUSTOMERS,
                        RoleEnum.SHIPPING,
                        RoleEnum.RETURNS
                    ];
                };
                /**
                 * Returns the roles list including the <code>RoleEnum.NONE_SELECTED</code> item used to
                 * fill the combo box.
                 *
                 * @return
                 * 		The department list including the <code>RoleEnum.NONE_SELECTED</code> item.
                 */
                RoleEnum.getComboList = function () {
                    var cList = RoleEnum.getList();
                    cList.unshift(RoleEnum.NONE_SELECTED);
                    return cList;
                };
                /**
                 * Returns the <code>RoleEnum</code> with this ordinal value.
                 *
                 * @param ordinal
                 * 		The ordinal value to search for in the list.
                 *
                 * @return
                 * 		The <code>RoleEnum</code> with this ordinal value or <code>null</code>
                 * 		if not found.
                 */
                RoleEnum.getItem = function (ordinal) {
                    var list = RoleEnum.getList();
                    for (var i = 0; i < list.length; i++)
                        if (list[i].ordinal == ordinal)
                            return list[i];
                    return null;
                };
                ////////////////////////////////////////////////////////////////////////////////////////////
                // STATIC
                ////////////////////////////////////////////////////////////////////////////////////////////
                RoleEnum.NONE_SELECTED = new RoleEnum("Select a role", -1);
                RoleEnum.ADMIN = new RoleEnum("Administrator", 0);
                RoleEnum.ACCT_PAY = new RoleEnum("Accounts Payable", 1);
                RoleEnum.ACCT_RCV = new RoleEnum("Accounts Receivable", 2);
                RoleEnum.EMP_BENEFITS = new RoleEnum("Employee Benefits", 3);
                RoleEnum.GEN_LEDGER = new RoleEnum("General Ledger", 4);
                RoleEnum.PAYROLL = new RoleEnum("Payroll", 5);
                RoleEnum.INVENTORY = new RoleEnum("Inventory", 6);
                RoleEnum.PRODUCTION = new RoleEnum("Production", 7);
                RoleEnum.QUALITY_CTL = new RoleEnum("Quality Control", 8);
                RoleEnum.SALES = new RoleEnum("Sales", 9);
                RoleEnum.ORDERS = new RoleEnum("Orders", 10);
                RoleEnum.CUSTOMERS = new RoleEnum("Customers", 11);
                RoleEnum.SHIPPING = new RoleEnum("Shipping", 12);
                RoleEnum.RETURNS = new RoleEnum("Returns", 13);
                return RoleEnum;
            })();
            EmployeeAdmin.RoleEnum = RoleEnum;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../enum/RoleEnum.ts'/>
        /**
         * The value object in charge of transporting the data to describe each user roles.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var RoleVO = (function () {
                function RoleVO() {
                    /**
                     * Unique name of the user to whom are associated the roles.
                     */
                    this.uname = "";
                    /**
                     * The list of roles associated to the user.
                     */
                    this.roles = [];
                }
                return RoleVO;
            })();
            EmployeeAdmin.RoleVO = RoleVO;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        var __extends = this.__extends || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            function __() { this.constructor = d; }
            __.prototype = b.prototype;
            d.prototype = new __();
        };
        ///<reference path='vo/UserVO.ts'/>
        /**
         * PureMVC <code>Proxy</code> class object used to control the user list of the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UserProxy = (function (_super) {
                __extends(UserProxy, _super);
                function UserProxy() {
                    _super.apply(this, arguments);
                }
                /**
                 * Return the users list controlled by the <code>Proxy</code>.
                 */
                UserProxy.prototype.getUsers = function () {
                    return this.data;
                };
                /**
                 * Add a user to the list.
                 *
                 * @param user
                 * 		The user to add to the list of users.
                 */
                UserProxy.prototype.addItem = function (user) {
                    this.getUsers().push(user);
                };
                /**
                 * Return a user given its user name.
                 *
                 * @param uname
                 * 		The user name of the user to find.
                 *
                 * @return
                 * 		The user with the given user name or <code>null</code> if none exists with this user
                 * 		name.
                 */
                UserProxy.prototype.getUser = function (uname) {
                    var users = this.getUsers();
                    for (var i = 0; i < users.length; i++)
                        if (users[i].uname === uname)
                            return users[i];
                    return null;
                };
                /**
                 * Update a user informations.
                 *
                 * @param user
                 * 		The user to update.
                 */
                UserProxy.prototype.updateItem = function (user) {
                    var users = this.getUsers();
                    for (var i = 0; i < users.length; i++)
                        if (users[i].uname === user.uname)
                            users[i] = user;
                };
                /**
                 * Remove a user from the list.
                 *
                 * @param uname
                 * 		The name ot the user to remove.
                 */
                UserProxy.prototype.deleteItem = function (uname) {
                    var users = this.getUsers();
                    for (var i = 0; i < users.length; i++)
                        if (users[i].uname === uname)
                            users.splice(i, 1);
                };
                return UserProxy;
            })(puremvc.Proxy);
            EmployeeAdmin.UserProxy = UserProxy;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='enum/RoleEnum.ts'/>
        ///<reference path='vo/RoleVO.ts'/>
        ///<reference path='vo/UserVO.ts'/>
        /**
         * PureMVC <code>Proxy</code> class object used to control the user roles list of the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var RoleProxy = (function (_super) {
                __extends(RoleProxy, _super);
                function RoleProxy() {
                    _super.apply(this, arguments);
                }
                /**
                 * Get the role list.
                 *
                 * @return
                 * 		The role list.
                 */
                RoleProxy.prototype.getRoles = function () {
                    return this.data;
                };
                /**
                 * Add a role to the list.
                 *
                 * @param role
                 * 		The role to add.
                 */
                RoleProxy.prototype.addItem = function (role) {
                    this.getRoles().push(role);
                };
                /**
                 * Remove a role from the list.
                 *
                 * @param uname
                 * 		The user name associated to the role to remove.
                 */
                RoleProxy.prototype.deleteItem = function (uname) {
                    var roles = this.getRoles();
                    for (var i = 0; i < roles.length; i++) {
                        if (roles[i].uname === uname) {
                            roles.splice(i, 1);
                            break;
                        }
                    }
                };
                /**
                 * Determine if the user has a given role.
                 *
                 * @param user
                 * 		The user for whom to search for the role.
                 *
                 * @param role
                 * 		The role to search for.
                 *
                 * @return
                 * 		The user has the given role.
                 */
                RoleProxy.prototype.doesUserHaveRole = function (user, role) {
                    var roles = this.getRoles();
                    var hasRole = false;
                    for (var i = 0; i < roles.length; i++) {
                        if (roles[i].uname === user.uname) {
                            var userRoles = roles[i].roles;
                            for (var j = 0; j < userRoles.length; j++) {
                                var roleEnum = userRoles[j];
                                if (roleEnum.equals(role)) {
                                    hasRole = true;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    return hasRole;
                };
                /**
                 * Add a role to a user.
                 *
                 * @param user
                 * 		The user to whom to add a role.
                 *
                 * @param role
                 * 		The role to add.
                 */
                RoleProxy.prototype.addRoleToUser = function (user, role) {
                    var roles = this.getRoles();
                    var result = false;
                    if (!this.doesUserHaveRole(user, role)) {
                        for (var i = 0; i < roles.length; i++) {
                            if (roles[i].uname == user.uname) {
                                var userRoles = roles[i].roles;
                                userRoles.push(role);
                                result = true;
                                break;
                            }
                        }
                    }
                };
                /**
                 * Remove a role from a user.
                 *
                 * @param user
                 * 		The user to whom remove the role.
                 *
                 * @param role
                 * 		The role to remove.
                 */
                RoleProxy.prototype.removeRoleFromUser = function (user, role) {
                    var roles = this.getRoles();
                    if (this.doesUserHaveRole(user, role)) {
                        for (var i = 0; i < roles.length; i++) {
                            if (roles[i].uname === user.uname) {
                                var userRoles = roles[i].roles;
                                for (var j = 0; j < userRoles.length; j++) {
                                    var roleEnum = userRoles[j];
                                    if (roleEnum.equals(role)) {
                                        userRoles.splice(j, 1);
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                    }
                };
                /**
                 * Get a user's roles.
                 *
                 * @param uname
                 * 		The user unique name.
                 *
                 * @return
                 * 		The user's role list.
                 */
                RoleProxy.prototype.getUserRoles = function (uname) {
                    var roles = this.getRoles();
                    var userRoles = [];
                    for (var i = 0; i < roles.length; i++) {
                        if (roles[i].uname === uname) {
                            userRoles = roles[i].roles;
                            break;
                        }
                    }
                    return userRoles;
                };
                return RoleProxy;
            })(puremvc.Proxy);
            EmployeeAdmin.RoleProxy = RoleProxy;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../abc/ProxyNames.ts'/>
        ///<reference path='../model/vo/UserVO.ts'/>
        ///<reference path='../model/vo/RoleVO.ts'/>
        ///<reference path='../model/UserProxy.ts'/>
        ///<reference path='../model/RoleProxy.ts'/>
        /**
         * Configure and initialize model for the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var PrepModelCommand = (function (_super) {
                __extends(PrepModelCommand, _super);
                function PrepModelCommand() {
                    _super.apply(this, arguments);
                }
                /**
                 * @override
                 */
                PrepModelCommand.prototype.execute = function (note) {
                    /*
                     * Data initialization.
                     */
                    var userProxy = new EmployeeAdmin.UserProxy(EmployeeAdmin.ProxyNames.USER_PROXY, this.generateUsers());
                    var roleProxy = new EmployeeAdmin.RoleProxy(EmployeeAdmin.ProxyNames.ROLE_PROXY, this.generateRoles());
                    /*
                     * Proxies initialization.
                     */
                    this.facade.registerProxy(userProxy);
                    this.facade.registerProxy(roleProxy);
                };
                /**
                 * Generates and returns a dummy users list.
                 *
                 * @return
                 * 		The generated dummy users list.
                 */
                PrepModelCommand.prototype.generateUsers = function () {
                    var user;
                    var users = [];
                    user = new EmployeeAdmin.UserVO();
                    user.uname = "lstooge";
                    user.fname = "Larry";
                    user.lname = "StoogeX";
                    user.email = "larry@stooges.com";
                    user.password = "ijk456";
                    user.department = EmployeeAdmin.DeptEnum.ACCT;
                    users.push(user);
                    user = new EmployeeAdmin.UserVO();
                    user.uname = "cstooge";
                    user.fname = "Curly";
                    user.lname = "Stooge";
                    user.email = "curly@stooges.com";
                    user.password = "xyz987";
                    user.department = EmployeeAdmin.DeptEnum.SALES;
                    users.push(user);
                    user = new EmployeeAdmin.UserVO();
                    user.uname = "mstooge";
                    user.fname = "Moe";
                    user.lname = "Stooge";
                    user.email = "moe@stooges.com";
                    user.password = "abc123";
                    user.department = EmployeeAdmin.DeptEnum.PLANT;
                    users.push(user);
                    return users;
                };
                /**
                 * Generates and returns a dummy roles list.
                 *
                 * @return
                 * 		The generated dummy roles list.
                 */
                PrepModelCommand.prototype.generateRoles = function () {
                    var role;
                    var roles = [];
                    role = new EmployeeAdmin.RoleVO();
                    role.uname = "lstooge";
                    role.roles = [EmployeeAdmin.RoleEnum.PAYROLL, EmployeeAdmin.RoleEnum.EMP_BENEFITS];
                    roles.push(role);
                    role = new EmployeeAdmin.RoleVO();
                    role.uname = "cstooge";
                    role.roles = [EmployeeAdmin.RoleEnum.ACCT_PAY, EmployeeAdmin.RoleEnum.ACCT_RCV, EmployeeAdmin.RoleEnum.GEN_LEDGER];
                    roles.push(role);
                    role = new EmployeeAdmin.RoleVO();
                    role.uname = "mstooge";
                    role.roles = [EmployeeAdmin.RoleEnum.INVENTORY, EmployeeAdmin.RoleEnum.PRODUCTION, EmployeeAdmin.RoleEnum.SALES, EmployeeAdmin.RoleEnum.SHIPPING];
                    roles.push(role);
                    return roles;
                };
                return PrepModelCommand;
            })(puremvc.SimpleCommand);
            EmployeeAdmin.PrepModelCommand = PrepModelCommand;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        /**
         * Defines <code>Mediator</code>s names for the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var MediatorNames = (function () {
                function MediatorNames() {
                }
                MediatorNames.USER_FORM_MEDIATOR = "userFormMediator";
                MediatorNames.USER_LIST_MEDIATOR = "userListMediator";
                MediatorNames.ROLE_PANEL_MEDIATOR = "rolePanelMediator";
                return MediatorNames;
            })();
            EmployeeAdmin.MediatorNames = MediatorNames;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        /**
         * A base class used for UI components of the application.
         *
         * It mainly adds a basic UiComponent implementation to make UI components listenable from the
         * <code>Mediator</code>s. Here to simplify the demo we don't use a real <code>Event</code> class.
         * Implementers and listeners are responsible for the anonymous events object they dispatch and
         * receive.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UiComponent = (function () {
                /**
                 * Constructs a <code>UiComponent</code> instance.
                 */
                function UiComponent() {
                    /**
                     * A map of <code>ListenerDescriptor</code> objects.
                     */
                    this.listenerMap = null;
                    this.listenerMap = {};
                }
                /**
                 * Dispatches an event into the event flow.
                 *
                 * @param type
                 * 		The type of the event to dispatch.
                 *
                 * @param properties
                 *		An anonymous object to send to listeners of the event when it is dispatched.
                 *
                 * @protected
                 */
                UiComponent.prototype.dispatchEvent = function (type, properties) {
                    if (properties === void 0) { properties = null; }
                    if (typeof type == 'undefined')
                        return;
                    if (typeof this.listenerMap[UiComponent.QUEUE_PATTERN + type] == 'undefined')
                        return;
                    var queue = this.listenerMap[UiComponent.QUEUE_PATTERN + type].slice(0);
                    var len = queue.length;
                    for (var i = 0; i < len; i++) {
                        var listenerDescriptor = queue[i];
                        if (typeof listenerDescriptor.context != "undefined")
                            listenerDescriptor.listener.call(listenerDescriptor.context, type, properties);
                        else
                            listenerDescriptor.listener.call(this, type, properties);
                    }
                };
                /**
                 * Add an event listener so that the listener receives notification of an event.
                 *
                 * @param type
                 * 		Type of the event to add.
                 *
                 * @param listener
                 * 		The listener method of the event to add.
                 *
                 * @param context
                 * 		The context attached for the listener method of the event to add.
                 *
                 * @protected
                 */
                UiComponent.prototype.addEventListener = function (type, listener, context) {
                    if (context === void 0) { context = null; }
                    if (typeof type == "undefined")
                        return;
                    if (typeof listener != 'function')
                        return;
                    var newListener = new ListenerDescriptor(listener, context);
                    var queue;
                    if (typeof this.listenerMap[UiComponent.QUEUE_PATTERN + type] == "undefined")
                        queue = this.listenerMap[UiComponent.QUEUE_PATTERN + type] = [];
                    else
                        queue = this.listenerMap[UiComponent.QUEUE_PATTERN + type];
                    var len = queue.length;
                    for (var i = 0; i < len; i++) {
                        var listenerDescriptor = queue[i];
                        if (listenerDescriptor.equals(newListener))
                            return;
                    }
                    queue.push(newListener);
                };
                /**
                 * Remove an event listener so that the listener stops receiving notification
                 * of an event.
                 *
                 * @param type
                 * 		Type of the event to remove.
                 *
                 * @param listener
                 * 		The listener method of the event to remove.
                 *
                 * @param context
                 * 		The context attached for the listener method of the event to remove.
                 *
                 * @protected
                 */
                UiComponent.prototype.removeEventListener = function (type, listener, context) {
                    if (context === void 0) { context = null; }
                    if (typeof type == "undefined")
                        return;
                    if (typeof listener == "undefined")
                        return;
                    if (typeof this.listenerMap[UiComponent.QUEUE_PATTERN + type] == "undefined")
                        return;
                    var queue = this.listenerMap[UiComponent.QUEUE_PATTERN + type];
                    var len = queue.length;
                    for (var i = 0; i < len; i++) {
                        var listenerDescriptor = queue[i];
                        if (listenerDescriptor.equals(new ListenerDescriptor(listener, context))) {
                            queue.splice(i, 1);
                            return;
                        }
                    }
                };
                /**
                 * Remove any references used by the component to help garbage collection.
                 */
                UiComponent.prototype.destroy = function () {
                    this.listenerMap = {};
                };
                /**
                 * A prefix used on map item names to prevent name conflicts.
                 *
                 * @type {string}
                 * @constant
                 */
                UiComponent.QUEUE_PATTERN = '@_@';
                return UiComponent;
            })();
            EmployeeAdmin.UiComponent = UiComponent;
            /**
             * Private class (this is what TypeScript compile today we better have to say) defining a
             * descriptor object used by the <code>listenerMap</code> to identify each event listener.
             */
            var ListenerDescriptor = (function () {
                /**
                 * Constructs a <code>ListenerDescriptor</code> instance.
                 *
                 * @param listener
                 * 		The listener method to call.
                 *
                 * @param context
                 * 		The listener context on which to call the method.
                 */
                function ListenerDescriptor(listener, context) {
                    this.listener = listener;
                    this.context = context;
                }
                /**
                 * Compare two <code>ListenerDescriptor</code>s to determine if they target the exact
                 * same event listener.
                 *
                 * @param compared
                 * 		The descriptor that will be compared to the current.
                 *
                 * @return
                 * 		The two compared listeners are equals.
                 */
                ListenerDescriptor.prototype.equals = function (compared) {
                    if (compared.listener === this.listener) {
                        if (typeof compared.context != "undefined") {
                            if (compared.context == null && this.context == null)
                                return true;
                            if (compared.context === this.context)
                                return true;
                        }
                    }
                    return false;
                };
                return ListenerDescriptor;
            })();
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
        ///<reference path='../../model/vo/UserVO.ts'/>
        ///<reference path='UiComponent.ts'/>
        /**
         * The UI component in charge of the <em>User List</em>.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UserList = (function (_super) {
                __extends(UserList, _super);
                /**
                 * Constructs a <code>UserList</code> instance.
                 *
                 * @param view
                 * 		The jQuery element giving access to the corresponding UI HTML element in the page.
                 */
                function UserList(view) {
                    _super.call(this);
                    /**
                     * The user list panel HTML element.
                     */
                    this.userListPanel = null;
                    /**
                     * The user list HTML element.
                     */
                    this.userList = null;
                    /**
                     * The "new" button HTML element.
                     */
                    this.newButton = null;
                    /**
                     * The "delete" button HTML element.
                     */
                    this.deleteButton = null;
                    /**
                     * The current selected user.
                     */
                    this.selectedUser = null;
                    /**
                     * The user total HTML element.
                     */
                    this.userTotal = null;
                    /**
                     * The user list of the application.
                     */
                    this.users = null;
                    this.userListPanel = view;
                    this.initializeChildren();
                    this.bindListeners();
                }
                /**
                 * Initialize references to DOM elements using jQuery.
                 */
                UserList.prototype.initializeChildren = function () {
                    this.userList = this.userListPanel.find(".user-list");
                    this.userTotal = this.userListPanel.find(".user-total");
                    this.userList.jqGrid({
                        datatype: "local",
                        width: 630,
                        height: 160,
                        colNames: ["User Name", "First Name", "Last Name", "Email", "Department"],
                        colModel: [
                            { name: "uname", index: "uname", width: 125 },
                            { name: "fname", index: "fname", width: 125 },
                            { name: "lname", index: "lname", width: 125 },
                            { name: "email", index: "email", width: 130 },
                            { name: "department", index: "department", width: 125 }
                        ]
                    });
                    this.newButton = this.userListPanel.find(".new-button").button();
                    this.deleteButton = this.userListPanel.find(".delete-button").button();
                    this.deleteButton.button("disable");
                };
                /**
                 * Bind events to their listeners.
                 */
                UserList.prototype.bindListeners = function () {
                    //jQuery will be able to only remove events attached under this namespace
                    var namespace = ".UserList";
                    this.userList.jqGrid("setGridParam", { onSelectRow: jQuery.proxy(this, "userList_selectHandler") });
                    this.newButton.on("click" + namespace, jQuery.proxy(this, "newButton_clickHandler"));
                    this.deleteButton.on("click" + namespace, jQuery.proxy(this, "deleteButton_clickHandler"));
                };
                /**
                 * Unbind events from their listeners.
                 */
                UserList.prototype.unbindListeners = function () {
                    //jQuery will only remove events attached under this namespace
                    var namespace = ".UserList";
                    this.userList.jqGrid("setGridParam", { onSelectRow: null });
                    this.newButton.off("click" + namespace);
                    this.deleteButton.off("click" + namespace);
                };
                /**
                 * Remove any references used by the component to help garbage collection.
                 */
                UserList.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                    this.unbindListeners();
                };
                /**
                 * Add users from a list to the <SELECT> component.
                 *
                 * @param {Array} userList
                 * 		The user list to set.
                 */
                UserList.prototype.setUsers = function (userList) {
                    this.users = userList;
                    this.userTotal.text(userList.length);
                    // First clear all
                    this.userList.jqGrid("clearGridData");
                    for (var i = 0; i < userList.length; i++) {
                        var user = userList[i];
                        var rowData = {
                            uname: user.uname,
                            fname: user.fname,
                            lname: user.lname,
                            email: user.email,
                            department: user.department.value
                        };
                        this.userList.jqGrid("addRowData", i + 1, rowData);
                    }
                };
                /**
                 * Return current selected user in user list.
                 *
                 * Note that <code>jQgrid v3.6</code> cannot embed any external data to transport the
                 * <code>UserVo</code>. So it is best to return <code>uname</code>.
                 *
                 * @return
                 * 		The user name selected in the user list.
                 */
                UserList.prototype.getSelectedUser = function () {
                    return this.selectedUser;
                };
                /**
                 * Remove selection in the user list.
                 */
                UserList.prototype.deSelect = function () {
                    this.userList.jqGrid("resetSelection");
                    this.selectedUser = null;
                    this.deleteButton.button("disable");
                };
                /**
                 * List row selection event listener.
                 *
                 * @param id
                 * 		The id of the selected row.
                 */
                UserList.prototype.userList_selectHandler = function (id) {
                    var rowData = this.userList.jqGrid("getRowData", id);
                    var uname;
                    for (var i = 0; i < this.users.length; i++) {
                        var userVO = this.users[i];
                        if (userVO.uname === rowData.uname) {
                            uname = rowData.uname;
                            break;
                        }
                    }
                    this.selectedUser = uname;
                    this.dispatchEvent(UserList.SELECT);
                    this.deleteButton.button("enable");
                };
                /**
                 * New button click event listener.
                 */
                UserList.prototype.newButton_clickHandler = function () {
                    this.deSelect();
                    this.dispatchEvent(UserList.NEW);
                };
                /**
                 * New button click event listener.
                 */
                UserList.prototype.deleteButton_clickHandler = function () {
                    this.dispatchEvent(UserList.DELETE);
                };
                /*
                 * New event name.
                 *
                 * @constant
                 */
                UserList.NEW = "new";
                /*
                 * Delete event name.
                 *
                 * @constant
                 */
                UserList.DELETE = "delete";
                /*
                 * Select event name.
                 *
                 * @constant
                 */
                UserList.SELECT = "select";
                return UserList;
            })(EmployeeAdmin.UiComponent);
            EmployeeAdmin.UserList = UserList;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../abc/NotificationNames.ts'/>
        ///<reference path='../abc/ProxyNames.ts'/>
        ///<reference path='../model/UserProxy.ts'/>
        ///<reference path='components/UserList.ts'/>
        /**
         * User list component <code>Mediator</code>.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UserListMediator = (function (_super) {
                __extends(UserListMediator, _super);
                /**
                 * Constructs a <code>UserListMediator</code> instance.
                 *
                 * @param name
                 * 		Name for this <code>Mediator</code>.
                 *
                 * @param viewComponent
                 * 		The <code>UserList</code> UI Component this <code>Mediator</code> manage.
                 */
                function UserListMediator(name, viewComponent) {
                    _super.call(this, name, viewComponent);
                    /**
                     * The <code>UserList</code> UI component this <code>Mediator</code> manage.
                     */
                    this.userList = null;
                    this.registerListeners();
                    var userProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.USER_PROXY);
                    viewComponent.setUsers(userProxy.getUsers());
                }
                /**
                 * Register event listeners for the UserForm component.
                 */
                UserListMediator.prototype.registerListeners = function () {
                    var userList = this.getUserList();
                    userList.addEventListener(EmployeeAdmin.UserList.NEW, this.onNew, this);
                    userList.addEventListener(EmployeeAdmin.UserList.DELETE, this.onDelete, this);
                    userList.addEventListener(EmployeeAdmin.UserList.SELECT, this.onSelect, this);
                };
                /**
                 * Unregister event listeners for the UserForm component.
                 */
                UserListMediator.prototype.unregisterListeners = function () {
                    var userList = this.getUserList();
                    userList.removeEventListener(EmployeeAdmin.UserList.NEW, this.onNew, this);
                    userList.removeEventListener(EmployeeAdmin.UserList.DELETE, this.onDelete, this);
                    userList.removeEventListener(EmployeeAdmin.UserList.SELECT, this.onSelect, this);
                };
                /**
                 * Return the <code>UserList</code> UI component this <code>Mediator</code> manage.
                 *
                 * @return
                 * 		The <code>UserList</code> UI component this	<code>Mediator</code> manage.
                 */
                UserListMediator.prototype.getUserList = function () {
                    return this.viewComponent;
                };
                /**
                 * @override
                 */
                UserListMediator.prototype.listNotificationInterests = function () {
                    return [
                        EmployeeAdmin.NotificationNames.CANCEL_SELECTED,
                        EmployeeAdmin.NotificationNames.USER_UPDATED,
                        EmployeeAdmin.NotificationNames.USER_ADDED,
                        EmployeeAdmin.NotificationNames.USER_DELETED
                    ];
                };
                /**
                 * @override
                 */
                UserListMediator.prototype.handleNotification = function (note) {
                    var userList = this.getUserList();
                    var userProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.USER_PROXY);
                    switch (note.getName()) {
                        case EmployeeAdmin.NotificationNames.CANCEL_SELECTED:
                            userList.deSelect();
                            break;
                        case EmployeeAdmin.NotificationNames.USER_UPDATED:
                            userList.setUsers(userProxy.getUsers());
                            userList.deSelect();
                            break;
                        case EmployeeAdmin.NotificationNames.USER_ADDED:
                            userList.setUsers(userProxy.getUsers());
                            userList.deSelect();
                            break;
                        case EmployeeAdmin.NotificationNames.USER_DELETED:
                            userList.setUsers(userProxy.getUsers());
                            userList.deSelect();
                            break;
                    }
                };
                /**
                 * Called when to add a new user to the list.
                 */
                UserListMediator.prototype.onNew = function () {
                    var user = new EmployeeAdmin.UserVO();
                    this.sendNotification(EmployeeAdmin.NotificationNames.NEW_USER, user);
                };
                /**
                 * Called when to delete an user from the list.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                 */
                UserListMediator.prototype.onDelete = function (type, properties) {
                    var userList = this.getUserList();
                    var uname = userList.getSelectedUser();
                    var userProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.USER_PROXY);
                    var selectedUser = userProxy.getUser(uname);
                    this.sendNotification(EmployeeAdmin.NotificationNames.DELETE_USER, selectedUser);
                };
                /**
                 * Called when a user is selected in the user list.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                 */
                UserListMediator.prototype.onSelect = function (type, properties) {
                    var userList = this.getUserList();
                    var uname = userList.getSelectedUser();
                    var userProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.USER_PROXY);
                    var selectedUser = userProxy.getUser(uname);
                    this.sendNotification(EmployeeAdmin.NotificationNames.USER_SELECTED, selectedUser);
                };
                /**
                 * @override
                 *
                 * This will never be called during the demo but note that we well made the job of removing
                 * any listeners from the mediator and the component to make those instances ready for
                 * garbage collection.
                 */
                UserListMediator.prototype.onRemove = function () {
                    this.unregisterListeners();
                    this.getUserList().destroy();
                };
                return UserListMediator;
            })(puremvc.Mediator);
            EmployeeAdmin.UserListMediator = UserListMediator;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
        ///<reference path='../../model/enum/DeptEnum.ts'/>
        ///<reference path='../../model/enum/RoleEnum.ts'/>
        ///<reference path='../../model/vo/RoleVO.ts'/>
        ///<reference path='../../model/vo/UserVO.ts'/>
        ///<reference path='UiComponent.ts'/>
        /**
         * The UI component in charge of the <em>user form</em>.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UserForm = (function (_super) {
                __extends(UserForm, _super);
                /**
                 * Constructs a <code>UserForm</code> instance.
                 *
                 * @param view
                 * 		The jQuery element giving access to the corresponding UI HTML element in the page.
                 */
                function UserForm(view) {
                    _super.call(this);
                    /**
                     * The user form panel HTML element.
                     */
                    this.userFormPanel = null;
                    /**
                     * The unique name field HTML element.
                     */
                    this.uname = null;
                    /**
                     * The first name field HTML element.
                     */
                    this.fname = null;
                    /**
                     * The long name field HTML element.
                     */
                    this.lname = null;
                    /**
                     * The email field HTML element.
                     */
                    this.email = null;
                    /**
                     * The password field HTML element.
                     */
                    this.password = null;
                    /**
                     * The confirm password field HTML element.
                     */
                    this.confirm = null;
                    /**
                     * The department field HTML element.
                     */
                    this.department = null;
                    /**
                     * The cancel button HTML element.
                     */
                    this.cancelButton = null;
                    /**
                     * The submit button HTML element.
                     */
                    this.submitButton = null;
                    /**
                     * The selected uname HTML element.
                     */
                    this.selectedUname = null;
                    /**
                     * The selected user.
                     */
                    this.user = null;
                    /**
                     * The roles list for the selected user.
                     */
                    this.userRoles = null;
                    /**
                     * The MODE_ADD or MODE_EDIT user mode.
                     */
                    this.mode = null;
                    this.userFormPanel = view;
                    this.initializeChildren();
                    this.bindListeners();
                    //Needed to erase prefilled form informations.
                    this.clearForm();
                    this.setEnabled(false);
                }
                /**
                 * Initialize references to DOM elements using jQuery.
                 */
                UserForm.prototype.initializeChildren = function () {
                    this.selectedUname = this.userFormPanel.find(".selected-uname");
                    this.uname = this.userFormPanel.find(".uname");
                    this.fname = this.userFormPanel.find(".fname");
                    this.lname = this.userFormPanel.find(".lname");
                    this.email = this.userFormPanel.find(".email");
                    this.password = this.userFormPanel.find(".password");
                    this.confirm = this.userFormPanel.find(".confirm");
                    this.department = this.userFormPanel.find(".department");
                    this.submitButton = this.userFormPanel.find(".submit-button").button();
                    this.cancelButton = this.userFormPanel.find(".cancel-button").button();
                };
                /**
                 * Bind events to their listeners.
                 */
                UserForm.prototype.bindListeners = function () {
                    //jQuery will be able to only remove events attached under this namespace
                    var namespace = ".UserForm";
                    var focusEventProxy = jQuery.proxy(this, "field_focusHandler");
                    this.uname.on("focus" + namespace, focusEventProxy);
                    this.password.on("focus" + namespace, focusEventProxy);
                    this.confirm.on("focus" + namespace, focusEventProxy);
                    this.department.on("focus" + namespace, focusEventProxy);
                    this.submitButton.on("click" + namespace, jQuery.proxy(this, "submitButton_clickHandler"));
                    this.cancelButton.on("click" + namespace, jQuery.proxy(this, "cancelButton_clickHandler"));
                };
                /**
                 * Unbind events from their listeners.
                 */
                UserForm.prototype.unbindListeners = function () {
                    //jQuery will only remove events attached under this namespace
                    var namespace = ".UserForm";
                    this.uname.off("focus" + namespace);
                    this.password.off("focus" + namespace);
                    this.confirm.off("focus" + namespace);
                    this.department.off("focus" + namespace);
                    this.submitButton.off("click" + namespace);
                    this.cancelButton.off("click" + namespace);
                };
                /**
                 * Add items from <code>DeptEnum</code> to the corresponding list UI component.
                 *
                 * @param deptEnumList
                 *		List of <code>DeptEnum</code> items or an empty array to empty the list UI component
                 *		content.
                 */
                UserForm.prototype.fillList = function (deptEnumList) {
                    var htmlList = "";
                    for (var i = 0; i < deptEnumList.length; i++) {
                        var deptEnum = deptEnumList[i];
                        //An item not having a value in jQuery will be excluded from the pop-up menu.
                        var valueAttr = 'value="' + deptEnum.ordinal + '"';
                        var selectedAttr = "";
                        if (this.user && deptEnum.equals(this.user.department))
                            selectedAttr = "selected";
                        if (!this.user && deptEnum.equals(EmployeeAdmin.DeptEnum.NONE_SELECTED))
                            selectedAttr = "selected";
                        htmlList += "<option " + valueAttr + " " + selectedAttr + " >" + deptEnum.value + "</option>";
                    }
                    this.department.html(htmlList);
                };
                /**
                 * Give focus to the form component.
                 */
                UserForm.prototype.setFocus = function () {
                    this.fname.focus();
                };
                /**
                 * Set the user used to populate the form.
                 *
                 * @param user
                 * 		The currently selected user.
                 */
                UserForm.prototype.setUser = function (user) {
                    this.user = user;
                    if (!user)
                        this.clearForm();
                    else {
                        this.selectedUname.text(user.uname);
                        this.uname.val(user.uname);
                        this.fname.val(user.fname);
                        this.lname.val(user.lname);
                        this.email.val(user.email);
                        this.password.val(user.password);
                        this.confirm.val(user.password);
                        this.fillList(EmployeeAdmin.DeptEnum.getComboList());
                    }
                };
                UserForm.prototype.getUser = function () {
                    this.updateUser();
                    return this.user;
                };
                /**
                 * Update user attributes with form fields value.
                 */
                UserForm.prototype.updateUser = function () {
                    this.user.uname = this.uname.val();
                    this.user.fname = this.fname.val();
                    this.user.lname = this.lname.val();
                    this.user.email = this.email.val();
                    this.user.password = this.password.val();
                    var selected = parseInt(this.department.val()) + 1;
                    var deptEnumList = EmployeeAdmin.DeptEnum.getComboList();
                    this.user.department = deptEnumList[selected];
                };
                /**
                 * Clear the whole form.
                 */
                UserForm.prototype.clearForm = function () {
                    this.selectedUname.text("");
                    this.uname.val("");
                    this.fname.val("");
                    this.lname.val("");
                    this.email.val("");
                    this.password.val("");
                    this.confirm.val("");
                    this.fillList([]);
                    this.setFieldError("email", false);
                    this.setFieldError("uname", false);
                    this.setFieldError("password", false);
                    this.setFieldError("confirm", false);
                    this.setFieldError("department", false);
                };
                /**
                 * Enable or disable the form.
                 *
                 * @param isEnabled
                 * 		The form must be enabled.
                 */
                UserForm.prototype.setEnabled = function (isEnabled) {
                    if (isEnabled) {
                        this.fname.removeAttr("disabled");
                        this.lname.removeAttr("disabled");
                        this.email.removeAttr("disabled");
                        this.password.removeAttr("disabled");
                        this.confirm.removeAttr("disabled");
                        this.department.removeAttr("disabled");
                        this.submitButton.button("enable");
                        this.cancelButton.button("enable");
                        if (this.mode == UserForm.MODE_EDIT)
                            this.uname.attr("disabled", "disabled");
                        else
                            this.uname.removeAttr("disabled");
                    }
                    else {
                        this.uname.attr("disabled", "disabled");
                        this.fname.attr("disabled", "disabled");
                        this.lname.attr("disabled", "disabled");
                        this.email.attr("disabled", "disabled");
                        this.password.attr("disabled", "disabled");
                        this.confirm.attr("disabled", "disabled");
                        this.department.attr("disabled", "disabled");
                        this.submitButton.button("disable");
                        this.cancelButton.button("disable");
                    }
                };
                /**
                 * Set the form mode to <code>MODE_ADD</code> or <code>MODE_EDIT</code>.
                 *
                 * @param mode
                 * 		<code>MODE_ADD</code> or <code>MODE_EDIT</code> from mode
                 */
                UserForm.prototype.setMode = function (mode) {
                    this.mode = mode;
                    switch (mode) {
                        case UserForm.MODE_ADD:
                            this.submitButton.find(".ui-button-text").text("Add");
                            break;
                        case UserForm.MODE_EDIT:
                            this.submitButton.find(".ui-button-text").text("Save");
                            break;
                    }
                };
                /**
                 * Remove any references used by the component to help garbage collection.
                 */
                UserForm.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                    this.unbindListeners();
                };
                /**
                 * Submit the add or update.
                 */
                UserForm.prototype.submitButton_clickHandler = function () {
                    if (this.getErrors())
                        return;
                    this.updateUser();
                    var user = this.getUser();
                    if (user.getIsValid()) {
                        if (this.mode == UserForm.MODE_ADD)
                            this.dispatchEvent(UserForm.ADD);
                        else
                            this.dispatchEvent(UserForm.UPDATE);
                    }
                };
                /**
                 * Cancel the add or update
                 */
                UserForm.prototype.cancelButton_clickHandler = function () {
                    this.dispatchEvent(UserForm.CANCEL);
                };
                /**
                 * Handle focus event on all the required form fields.
                 */
                UserForm.prototype.field_focusHandler = function (evt) {
                    //Remove error on the selected field.
                    this.setFieldError(evt.target.id, false);
                };
                /**
                 * Display errors associated with form fields and return if at least one field is in error.
                 *
                 * @return {bool}
                 * 		The form contains errors.
                 */
                UserForm.prototype.getErrors = function () {
                    var error = false;
                    if (this.uname.val() == "")
                        this.setFieldError("uname", error = true);
                    else
                        this.setFieldError("uname", false);
                    if (this.password.val() == "")
                        this.setFieldError("password", error = true);
                    else
                        this.setFieldError("password", false);
                    if (this.password.val() != "" && this.confirm.val() != this.password.val())
                        this.setFieldError("confirm", error = true);
                    else
                        this.setFieldError("confirm", false);
                    var selected = parseInt(this.department.val()) + 1;
                    var deptEnumList = EmployeeAdmin.DeptEnum.getComboList();
                    var department = deptEnumList[selected];
                    if (department.equals(EmployeeAdmin.DeptEnum.NONE_SELECTED))
                        this.setFieldError("department", error = true);
                    else
                        this.setFieldError("department", false);
                    /**
                     * The e-mail verification rule is the one used by HTML5 e-mail inputs.
                     * @see http://stackoverflow.com/questions/7786058/find-the-regex-used-by-html5-forms-for-validation
                     */
                    var emailReg = /^[a-z0-9!#$%&'*+\/=?^_`\{|\}~\.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/;
                    if (this.email.val() != "" && !emailReg.test(this.email.val()))
                        this.setFieldError("email", error = true);
                    else
                        this.setFieldError("email", false);
                    return error;
                };
                /**
                 * Set or unset the error state on the uname field.
                 *
                 * @param {string} fieldName
                 * 		Name of the field to mark as (or not mark as) containing an error.
                 *
                 * @param {bool} error
                 * 		The field must be marked as containing an error.
                 */
                UserForm.prototype.setFieldError = function (fieldName, error) {
                    var label = this.userFormPanel.find('label[for="' + fieldName + '"]');
                    var field = this.userFormPanel.find("#" + fieldName);
                    if (error) {
                        label.addClass("fieldError");
                        field.addClass("fieldError");
                    }
                    else {
                        label.removeClass("fieldError");
                        field.removeClass("fieldError");
                    }
                };
                /*
                 * Add event name.
                 *
                 * @constant
                 */
                UserForm.ADD = "add";
                /*
                 * Update event name.
                 *
                 * @constant
                 */
                UserForm.UPDATE = "update";
                /*
                 * Cancel event name.
                 *
                 * @constant
                 */
                UserForm.CANCEL = "cancel";
                /*
                 * Add mode name.
                 *
                 * @constant
                 */
                UserForm.MODE_ADD = "modeAdd";
                /*
                 * Edit event name.
                 *
                 * @constant
                 */
                UserForm.MODE_EDIT = "modeEdit";
                return UserForm;
            })(EmployeeAdmin.UiComponent);
            EmployeeAdmin.UserForm = UserForm;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../abc/NotificationNames.ts'/>
        ///<reference path='../abc/ProxyNames.ts'/>
        ///<reference path='../model/vo/RoleVO.ts'/>
        ///<reference path='../model/enum/RoleEnum.ts'/>
        ///<reference path='../model/UserProxy.ts'/>
        ///<reference path='components/UserForm.ts'/>
        /**
         * User form component <code>Mediator</code>.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var UserFormMediator = (function (_super) {
                __extends(UserFormMediator, _super);
                /**
                 * Constructs a <code>UserFormMediator</code> instance.
                 *
                 * @param name
                 * 		Name for this <code>Mediator</code>.
                 *
                 * @param viewComponent
                 * 		The <code>UserForm</code> view Component this <code>Mediator</code>	manage.
                 */
                function UserFormMediator(name, viewComponent) {
                    _super.call(this, name, viewComponent);
                    /**
                     * A shortcut to the application <code>UserProxy</code> instance.
                     */
                    this.userProxy = null;
                    this.registerListeners();
                    this.userProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.USER_PROXY);
                }
                /**
                 * Return the <code>UserForm</code> view component this <code>Mediator</code> manage.
                 *
                 * @return
                 * 		The <code>UserForm</code> view component this <code>Mediator</code> manage.
                 */
                UserFormMediator.prototype.getUserForm = function () {
                    return this.viewComponent;
                };
                /**
                 * Register event listeners for the UserForm component.
                 */
                UserFormMediator.prototype.registerListeners = function () {
                    var userForm = this.getUserForm();
                    userForm.addEventListener(EmployeeAdmin.UserForm.ADD, this.onAdd, this);
                    userForm.addEventListener(EmployeeAdmin.UserForm.UPDATE, this.onUpdate, this);
                    userForm.addEventListener(EmployeeAdmin.UserForm.CANCEL, this.onCancel, this);
                };
                /**
                 * Unregister event listeners for the UserForm component.
                 */
                UserFormMediator.prototype.unregisterListeners = function () {
                    var userForm = this.getUserForm();
                    userForm.addEventListener(EmployeeAdmin.UserForm.ADD, this.onAdd, this);
                    userForm.addEventListener(EmployeeAdmin.UserForm.UPDATE, this.onUpdate, this);
                    userForm.addEventListener(EmployeeAdmin.UserForm.CANCEL, this.onCancel, this);
                };
                /**
                 * Called when a user is added using the form.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                 */
                UserFormMediator.prototype.onAdd = function (type, properties) {
                    var user = this.getUserForm().getUser();
                    this.userProxy.addItem(user);
                    this.sendNotification(EmployeeAdmin.NotificationNames.USER_ADDED, user);
                    var userForm = this.getUserForm();
                    userForm.clearForm();
                    userForm.setEnabled(false);
                    userForm.setMode(EmployeeAdmin.UserForm.MODE_ADD);
                };
                /**
                 * Called when a user is updated using the form.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                 */
                UserFormMediator.prototype.onUpdate = function (type, properties) {
                    var user = this.getUserForm().getUser();
                    this.userProxy.updateItem(user);
                    this.sendNotification(EmployeeAdmin.NotificationNames.USER_UPDATED, user);
                    var userForm = this.getUserForm();
                    userForm.clearForm();
                    userForm.setEnabled(false);
                    userForm.setMode(EmployeeAdmin.UserForm.MODE_ADD);
                };
                /**
                 * Called when modifications made to a user in the form are canceled.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                */
                UserFormMediator.prototype.onCancel = function (type, properties) {
                    this.sendNotification(EmployeeAdmin.NotificationNames.CANCEL_SELECTED);
                    var userForm = this.getUserForm();
                    userForm.clearForm();
                    userForm.setEnabled(false);
                    userForm.setMode(EmployeeAdmin.UserForm.MODE_ADD);
                };
                /**
                 * @override
                 */
                UserFormMediator.prototype.listNotificationInterests = function () {
                    return [
                        EmployeeAdmin.NotificationNames.NEW_USER,
                        EmployeeAdmin.NotificationNames.USER_DELETED,
                        EmployeeAdmin.NotificationNames.USER_SELECTED
                    ];
                };
                /**
                 * @override
                 */
                UserFormMediator.prototype.handleNotification = function (note) {
                    var userForm = this.getUserForm();
                    var user;
                    switch (note.getName()) {
                        case EmployeeAdmin.NotificationNames.NEW_USER:
                            userForm.setUser(note.getBody());
                            userForm.setMode(EmployeeAdmin.UserForm.MODE_ADD);
                            userForm.setEnabled(true);
                            userForm.setFocus();
                            break;
                        case EmployeeAdmin.NotificationNames.USER_DELETED:
                            userForm.clearForm();
                            userForm.setEnabled(false);
                            break;
                        case EmployeeAdmin.NotificationNames.USER_SELECTED:
                            user = note.getBody();
                            userForm.clearForm();
                            userForm.setUser(user);
                            userForm.setMode(EmployeeAdmin.UserForm.MODE_EDIT);
                            userForm.setEnabled(true);
                            userForm.setFocus();
                            break;
                    }
                };
                /**
                 * @override
                 *
                 * This will never be called during the demo but note that we well made the job of removing
                 * any listeners from the mediator and the component to make those instances ready for
                 * garbage collection.
                 */
                UserFormMediator.prototype.onRemove = function () {
                    this.unregisterListeners();
                    this.getUserForm().destroy();
                };
                /*
                 * Add event name.
                 *
                 * @constant
                 */
                UserFormMediator.ADD = "add";
                /*
                 * Update event name.
                 *
                 * @constant
                 */
                UserFormMediator.UPDATE = "update";
                /*
                 * Cancel event name.
                 *
                 * @constant
                 */
                UserFormMediator.CANCEL = "cancel";
                /*
                 * Add mode name.
                 *
                 * @constant
                 */
                UserFormMediator.MODE_ADD = "modeAdd";
                /*
                 * Edit mode name.
                 *
                 * @constant
                 */
                UserFormMediator.MODE_EDIT = "modeEdit";
                return UserFormMediator;
            })(puremvc.Mediator);
            EmployeeAdmin.UserFormMediator = UserFormMediator;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../../../../../../../common/app/assets/javascripts/common/typings/jquery/jquery.d.ts'/>
        ///<reference path='UiComponent.ts'/>
        ///<reference path='../../model/vo/RoleVO.ts'/>
        ///<reference path='../../model/vo/UserVO.ts'/>
        ///<reference path='../../model/enum/RoleEnum.ts'/>
        /**
         * The UI component in charge of the <em>role panel</em>.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var RolePanel = (function (_super) {
                __extends(RolePanel, _super);
                /**
                 * Constructs a <code>RolePanel</code> instance.
                 *
                 * @param view
                 * 		The jQuery element giving access to the corresponding UI HTML element in the page.
                 */
                function RolePanel(view) {
                    _super.call(this);
                    /**
                     * Currently selected user.
                     */
                    this.user = null;
                    /**
                     * The user roles list.
                     */
                    this.userRoles = null;
                    /**
                     * Currently selected role.
                     */
                    this.selectedRole = null;
                    /**
                     * The ADD_MODE or REMOVE_MODE role mode.
                     */
                    this.mode = null;
                    /**
                     * The role panel HTML element.
                     */
                    this.rolePanel = null;
                    /**
                     * The full role list HTML element.
                     */
                    this.roleList = null;
                    /**
                     * The user role datagrid HTML element.
                     */
                    this.userRoleList = null;
                    /**
                     * The add role button HTML element.
                     */
                    this.addRoleButton = null;
                    /**
                     * The remove role button HTML element.
                     */
                    this.removeRoleButton = null;
                    /**
                     * The selected fullname HTML element.
                     */
                    this.selectedFullname = null;
                    this.rolePanel = view;
                    this.initializeChildren();
                    this.bindListeners();
                    this.fillRoleList();
                    this.setEnabled(false);
                }
                /**
                 * Initialize references to DOM elements using jQuery.
                 */
                RolePanel.prototype.initializeChildren = function () {
                    this.userRoleList = this.rolePanel.find(".user-role-list");
                    this.userRoleList.jqGrid({
                        datatype: "local",
                        width: 280,
                        height: 170,
                        colNames: ['Roles'],
                        colModel: [
                            { name: 'value', index: 'value' }
                        ]
                    });
                    this.selectedFullname = this.rolePanel.find(".selected-fullname");
                    this.roleList = this.rolePanel.find(".role-list");
                    this.addRoleButton = this.rolePanel.find(".add-role-button").button();
                    this.removeRoleButton = this.rolePanel.find(".remove-role-button").button();
                };
                /**
                 * Configure event listeners registration.
                 */
                RolePanel.prototype.bindListeners = function () {
                    //jQuery will be able to only remove events attached under this namespace
                    var namespace = ".UserRoleList";
                    this.addRoleButton.on("click" + namespace, jQuery.proxy(this, "addRoleButton_clickHandler"));
                    this.removeRoleButton.on("click" + namespace, jQuery.proxy(this, "removeRoleButton_clickHandler"));
                    this.roleList.on("change" + namespace, jQuery.proxy(this, "roleList_changeHandler"));
                    this.userRoleList.jqGrid("setGridParam", { onSelectRow: jQuery.proxy(this, "userRoleList_changeHandler") });
                };
                /**
                 * Configure event listeners registration.
                 */
                RolePanel.prototype.unbindListeners = function () {
                    //jQuery will be able to only remove events attached under this namespace
                    var namespace = ".UserRoleList";
                    this.addRoleButton.off("click" + namespace);
                    this.removeRoleButton.off("click" + namespace);
                    this.roleList.off("change" + namespace);
                    this.userRoleList.jqGrid("setGridParam", { onSelectRow: null });
                };
                /**
                 * Add items from <code>RoleEnum</code> to the <code>roleList</code> component.
                 */
                RolePanel.prototype.fillRoleList = function () {
                    var roleEnumList = EmployeeAdmin.RoleEnum.getComboList();
                    /*First clear all*/
                    this.roleList.empty();
                    var htmlList = "";
                    for (var i = 0; i < roleEnumList.length; i++) {
                        var role = roleEnumList[i];
                        /*
                         * An item not having a value in jQuery will be excluded from the
                         * pop-up menu.
                         */
                        var valueAttr = 'value="' + role.ordinal + '"';
                        var selectedAttr = i == 0 ? "selected" : "";
                        htmlList += '<option ' + valueAttr + ' ' + selectedAttr + ' >' + role.value + '</option>';
                    }
                    this.roleList.html(htmlList);
                };
                /**
                 * Set the displayed user roles list.
                 *
                 * @param userRoles
                 * 		The role list associated to the currently selected user.
                 */
                RolePanel.prototype.setUserRoles = function (userRoles) {
                    // First clear all
                    this.userRoleList.jqGrid('clearGridData');
                    if (!userRoles)
                        return;
                    this.userRoles = userRoles;
                    for (var i = 0; i < userRoles.length; i++) {
                        var role = userRoles[i];
                        this.userRoleList.jqGrid('addRowData', i + 1, role);
                    }
                };
                /**
                 * Get the selected user for whom roles list is displayed.
                 *
                 * @return
                 * 		The selected user for whom roles list is displayed.
                 */
                RolePanel.prototype.getUser = function () {
                    return this.user;
                };
                /**
                 * Set the selected user for whom roles list is displayed.
                 *
                 * @param user
                 * 		The selected user for whom to display the roles.
                 */
                RolePanel.prototype.setUser = function (user) {
                    this.user = user;
                    this.selectedFullname.text(user.lname + ", " + user.fname);
                };
                /**
                 * Get the selected role in the remove/add combobox if any.
                 *
                 * @return
                 * 		The selected role in the remove/add combobox if any.
                 */
                RolePanel.prototype.getSelectedRole = function () {
                    return this.selectedRole;
                };
                /**
                 * Enable or disable the form.
                 *
                 * @param isEnabled
                 * 		When true enable the form and when false disable it.
                 */
                RolePanel.prototype.setEnabled = function (isEnabled) {
                    if (isEnabled) {
                        this.userRoleList.removeAttr("disabled");
                        this.roleList.removeAttr("disabled");
                        this.addRoleButton.button("enable");
                        this.removeRoleButton.button("enable");
                    }
                    else {
                        this.userRoleList.attr("disabled", "disabled");
                        this.roleList.attr("disabled", "disabled");
                        this.roleList.prop("selectedIndex", 0);
                        this.addRoleButton.button("disable");
                        this.removeRoleButton.button("disable");
                    }
                };
                /**
                 * Set the panel mode to <code>ADD_MODE</code> or <code>REMOVE_MODE</code>.
                 *
                 * @param mode
                 *		The panel <code>ADD_MODE</code> or <code>REMOVE_MODE</code> mode.
                 */
                RolePanel.prototype.setMode = function (mode) {
                    switch (mode) {
                        case RolePanel.ADD_MODE:
                            this.addRoleButton.button("enable");
                            this.removeRoleButton.button("disable");
                            break;
                        case RolePanel.REMOVE_MODE:
                            this.addRoleButton.button("disable");
                            this.removeRoleButton.button("enable");
                            this.roleList.prop("selectedIndex", 0);
                            break;
                        default:
                            this.addRoleButton.button("disable");
                            this.removeRoleButton.button("disable");
                    }
                };
                /**
                 * Clear the panel from all its displayed data.
                 */
                RolePanel.prototype.clearForm = function () {
                    this.user = null;
                    this.setUserRoles(null);
                    this.selectedFullname.text("");
                    this.roleList.prop("selectedIndex", 0);
                    this.userRoleList.jqGrid('resetSelection');
                };
                /**
                 * Remove any references used by the component to help garbage collection.
                 */
                RolePanel.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                    this.unbindListeners();
                };
                /**
                 * Add button onclick event listener.
                 */
                RolePanel.prototype.addRoleButton_clickHandler = function () {
                    this.dispatchEvent(RolePanel.ADD);
                };
                /**
                 * Remove button onclick event listener.
                 */
                RolePanel.prototype.removeRoleButton_clickHandler = function () {
                    this.dispatchEvent(RolePanel.REMOVE);
                };
                /**
                 * Select role to remove.
                 *
                 * @param id
                 * 		The id of the selected row.
                 */
                RolePanel.prototype.userRoleList_changeHandler = function (id) {
                    var index = this.userRoleList.jqGrid('getInd', id);
                    this.selectedRole = this.userRoles[index - 1];
                    this.setMode(RolePanel.REMOVE_MODE);
                };
                /**
                 * Select role to add.
                 */
                RolePanel.prototype.roleList_changeHandler = function () {
                    this.userRoleList.jqGrid('resetSelection');
                    var roleEnumList = EmployeeAdmin.RoleEnum.getComboList();
                    this.selectedRole = roleEnumList[this.roleList.prop("selectedIndex")];
                    var alreadyInList = false;
                    for (var i = 0; i < this.userRoles.length; i++) {
                        var role = this.userRoles[i];
                        if (role.equals(this.selectedRole)) {
                            alreadyInList = true;
                            break;
                        }
                    }
                    if (this.selectedRole == EmployeeAdmin.RoleEnum.NONE_SELECTED || alreadyInList)
                        this.setMode(null);
                    else
                        this.setMode(RolePanel.ADD_MODE);
                };
                /**
                 * Add event name.
                 *
                 * @constant
                 */
                RolePanel.ADD = "add";
                /**
                 * Remove event name.
                 *
                 * @constant
                 */
                RolePanel.REMOVE = "remove";
                /**
                 * Add mode name.
                 *
                 * @constant
                 */
                RolePanel.ADD_MODE = "addMode";
                /**
                 * Remove mode name.
                 *
                 * @constant
                 */
                RolePanel.REMOVE_MODE = "removeMode";
                return RolePanel;
            })(EmployeeAdmin.UiComponent);
            EmployeeAdmin.RolePanel = RolePanel;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../abc/NotificationNames.ts'/>
        ///<reference path='../abc/ProxyNames.ts'/>
        ///<reference path='../model/RoleProxy.ts'/>
        ///<reference path='components/RolePanel.ts'/>
        /**
         * Role panel component <code>Mediator</code>.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var RolePanelMediator = (function (_super) {
                __extends(RolePanelMediator, _super);
                /**
                 * Constructs a <code>RolePanelMediator</code> instance.
                 *
                 * @param name
                 * 		Name for this <code>Mediator</code>.
                 *
                 * @param viewComponent
                 * 		The <code>UserForm</code> view Component this <code>Mediator</code>	manage.
                 */
                function RolePanelMediator(name, viewComponent) {
                    _super.call(this, name, viewComponent);
                    /**
                     * A shortcut reference to the <code>RoleProxy</code>.
                     */
                    this.roleProxy = null;
                    this.registerListeners();
                    this.roleProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.ROLE_PROXY);
                }
                /**
                 * Return the <code>RolePanel</code> view component this <code>Mediator</code> manage.
                 *
                 * @return
                 * 		The <code>RolePanel</code> view component this <code>Mediator</code> manage.
                 */
                RolePanelMediator.prototype.getRolePanel = function () {
                    return this.viewComponent;
                };
                /**
                 * Register event listeners for the UserForm component.
                 */
                RolePanelMediator.prototype.registerListeners = function () {
                    var rolePanel = this.getRolePanel();
                    rolePanel.addEventListener(EmployeeAdmin.RolePanel.ADD, this.onAddRole, this);
                    rolePanel.addEventListener(EmployeeAdmin.RolePanel.REMOVE, this.onRemoveRole, this);
                };
                /**
                 * Unregister event listeners for the UserForm component.
                 */
                RolePanelMediator.prototype.unregisterListeners = function () {
                    var rolePanel = this.getRolePanel();
                    rolePanel.removeEventListener(EmployeeAdmin.RolePanel.ADD, this.onAddRole, this);
                    rolePanel.removeEventListener(EmployeeAdmin.RolePanel.REMOVE, this.onRemoveRole, this);
                };
                /**
                 * Called when a role is added to the selected user's role list.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                 */
                RolePanelMediator.prototype.onAddRole = function (type, properties) {
                    this.roleProxy.addRoleToUser(this.getRolePanel().getUser(), this.getRolePanel().getSelectedRole());
                    this.updateUserRoleList();
                    this.getRolePanel().setMode(null);
                };
                /**
                 * Called when a role is removed from the selected user's role list.
                 *
                 * @param type
                 * 		Type of the event dispatched.
                 *
                 * @param properties
                 * 		An anonymous object associated to the event dispatched.
                 */
                RolePanelMediator.prototype.onRemoveRole = function (type, properties) {
                    this.roleProxy.removeRoleFromUser(this.getRolePanel().getUser(), this.getRolePanel().getSelectedRole());
                    this.updateUserRoleList();
                    this.getRolePanel().setMode(null);
                };
                /**
                 * Force the user role list to update its display.
                 */
                RolePanelMediator.prototype.updateUserRoleList = function () {
                    var user = this.getRolePanel().getUser();
                    var userRoles = this.roleProxy.getUserRoles(user.uname);
                    this.getRolePanel().setUserRoles(userRoles);
                };
                /**
                 * @override
                 */
                RolePanelMediator.prototype.listNotificationInterests = function () {
                    return [
                        EmployeeAdmin.NotificationNames.NEW_USER,
                        EmployeeAdmin.NotificationNames.USER_ADDED,
                        EmployeeAdmin.NotificationNames.USER_UPDATED,
                        EmployeeAdmin.NotificationNames.USER_DELETED,
                        EmployeeAdmin.NotificationNames.CANCEL_SELECTED,
                        EmployeeAdmin.NotificationNames.USER_SELECTED,
                        EmployeeAdmin.NotificationNames.ADD_ROLE_RESULT
                    ];
                };
                /**
                 * @override
                 */
                RolePanelMediator.prototype.handleNotification = function (note) {
                    var rolePanel = this.getRolePanel();
                    switch (note.getName()) {
                        case EmployeeAdmin.NotificationNames.NEW_USER:
                            rolePanel.clearForm();
                            rolePanel.setEnabled(false);
                            break;
                        case EmployeeAdmin.NotificationNames.USER_ADDED:
                            rolePanel.setUser(note.getBody());
                            var roleVO = new EmployeeAdmin.RoleVO();
                            roleVO.uname = rolePanel.getUser().uname;
                            this.roleProxy.addItem(roleVO);
                            rolePanel.clearForm();
                            rolePanel.setEnabled(false);
                            break;
                        case EmployeeAdmin.NotificationNames.USER_UPDATED:
                            rolePanel.clearForm();
                            rolePanel.setEnabled(false);
                            break;
                        case EmployeeAdmin.NotificationNames.USER_DELETED:
                            rolePanel.clearForm();
                            rolePanel.setEnabled(false);
                            break;
                        case EmployeeAdmin.NotificationNames.CANCEL_SELECTED:
                            rolePanel.clearForm();
                            rolePanel.setEnabled(false);
                            break;
                        case EmployeeAdmin.NotificationNames.USER_SELECTED:
                            rolePanel.clearForm();
                            rolePanel.setEnabled(true);
                            rolePanel.setMode(null);
                            rolePanel.setUser(note.getBody());
                            this.updateUserRoleList();
                            break;
                        case EmployeeAdmin.NotificationNames.ADD_ROLE_RESULT:
                            this.updateUserRoleList();
                            break;
                    }
                };
                /**
                 * @override
                 *
                 * This will never be called during the demo but note that we well made the
                 * job of removing any listeners from the mediator and the component to
                 * make those instances ready for garbage collection.
                 */
                RolePanelMediator.prototype.onRemove = function () {
                    this.unregisterListeners();
                    this.getRolePanel().destroy();
                };
                return RolePanelMediator;
            })(puremvc.Mediator);
            EmployeeAdmin.RolePanelMediator = RolePanelMediator;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
        ///<reference path='../abc/MediatorNames.ts'/>
        ///<reference path='../view/UserListMediator.ts'/>
        ///<reference path='../view/UserFormMediator.ts'/>
        ///<reference path='../view/RolePanelMediator.ts'/>
        ///<reference path='../view/components/RolePanel.ts'/>
        ///<reference path='../view/components/UserForm.ts'/>
        ///<reference path='../view/components/UserList.ts'/>
        /**
         * Configure and initialize view for the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var PrepViewCommand = (function (_super) {
                __extends(PrepViewCommand, _super);
                function PrepViewCommand() {
                    _super.apply(this, arguments);
                }
                /**
                 * @override
                 */
                PrepViewCommand.prototype.execute = function (note) {
                    var mainView = note.getBody();
                    /*
                     * View Components are initialized using the application main view selector
                     */
                    var userForm = new EmployeeAdmin.UserForm(mainView.find(".user-form-panel"));
                    var userList = new EmployeeAdmin.UserList(mainView.find(".user-list-panel"));
                    var rolePanel = new EmployeeAdmin.RolePanel(mainView.find(".role-panel"));
                    /*
                     * Mediators initialization
                     */
                    var userListMediator = new EmployeeAdmin.UserListMediator(EmployeeAdmin.MediatorNames.USER_LIST_MEDIATOR, userList);
                    var userFormMediator = new EmployeeAdmin.UserFormMediator(EmployeeAdmin.MediatorNames.USER_FORM_MEDIATOR, userForm);
                    var rolePanelMediator = new EmployeeAdmin.RolePanelMediator(EmployeeAdmin.MediatorNames.ROLE_PANEL_MEDIATOR, rolePanel);
                    /*
                     * PureMVC mediators registration
                     */
                    this.facade.registerMediator(userFormMediator);
                    this.facade.registerMediator(userListMediator);
                    this.facade.registerMediator(rolePanelMediator);
                };
                return PrepViewCommand;
            })(puremvc.SimpleCommand);
            EmployeeAdmin.PrepViewCommand = PrepViewCommand;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='PrepModelCommand.ts'/>
        ///<reference path='PrepViewCommand.ts'/>
        /**
         * Start the application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var StartupCommand = (function (_super) {
                __extends(StartupCommand, _super);
                function StartupCommand() {
                    _super.apply(this, arguments);
                }
                /**
                 * @override
                 *
                 * Add the Subcommands to startup the PureMVC apparatus.
                 *
                 * Generally, it is best to prep the Model (mostly registering  proxies)followed by
                 * preparation of the View (mostly registering Mediators).
                 */
                StartupCommand.prototype.initializeMacroCommand = function () {
                    this.addSubCommand(EmployeeAdmin.PrepModelCommand);
                    this.addSubCommand(EmployeeAdmin.PrepViewCommand);
                };
                return StartupCommand;
            })(puremvc.MacroCommand);
            EmployeeAdmin.StartupCommand = StartupCommand;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../abc/NotificationNames.ts'/>
        ///<reference path='../abc/ProxyNames.ts'/>
        ///<reference path='../model/vo/UserVO.ts'/>
        ///<reference path='../model/vo/RoleVO.ts'/>
        ///<reference path='../model/UserProxy.ts'/>
        ///<reference path='../model/RoleProxy.ts'/>
        /**
         * Command used to delete a user from the main users list.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var DeleteUserCommand = (function (_super) {
                __extends(DeleteUserCommand, _super);
                function DeleteUserCommand() {
                    _super.apply(this, arguments);
                }
                /**
                 * @override
                 */
                DeleteUserCommand.prototype.execute = function (note) {
                    var user = note.getBody();
                    var userProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.USER_PROXY);
                    var roleProxy = this.facade.retrieveProxy(EmployeeAdmin.ProxyNames.ROLE_PROXY);
                    userProxy.deleteItem(user.uname);
                    roleProxy.deleteItem(user.uname);
                    this.sendNotification(EmployeeAdmin.NotificationNames.USER_DELETED);
                };
                return DeleteUserCommand;
            })(puremvc.SimpleCommand);
            EmployeeAdmin.DeleteUserCommand = DeleteUserCommand;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        ///<reference path='../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>
        ///<reference path='../../../../../common/app/assets/javascripts/common/typings/jquery/jqueryui.d.ts'/>
        ///<reference path='../../../../../common/app/assets/javascripts/common/typings/knockout/knockout.d.ts'/>
        ///<reference path='abc/NotificationNames.ts'/>
        ///<reference path='controller/StartupCommand.ts'/>
        ///<reference path='controller/DeleteUserCommand.ts'/>
        /**
         * PureMVC <code>Facade</code> for this application.
         */
        var EmployeeAdmin;
        (function (EmployeeAdmin) {
            "use strict";
            var ApplicationFacade = (function (_super) {
                __extends(ApplicationFacade, _super);
                function ApplicationFacade() {
                    _super.apply(this, arguments);
                }
                /**
                 * Start the application.
                 *
                 * @param app
                 * 		The HTML root node element of the application.
                 */
                ApplicationFacade.prototype.startup = function (app /*, ko:  KnockoutStatic*/) {
                    this.sendNotification(EmployeeAdmin.NotificationNames.STARTUP, app);
                };
                /**
                 * @override
                 *
                 * The <code>Model</code> <code>View</code> and <code>Controller</code> are initialized in a
                 * deliberate order to ensure internal dependencies are satisfied before operations are
                 * performed.
                 *
                 * <code>initializeController()</code> should be overridden for the specific purpose of
                 * registering your commands. Any attempt to register <code>Mediator</code>s here will
                 * result in an error being thrown because the View has not yet been initialized calling
                 * <code>this.parent()</code> is also required.
                 */
                ApplicationFacade.prototype.initializeController = function () {
                    _super.prototype.initializeController.call(this);
                    this.registerCommand(EmployeeAdmin.NotificationNames.STARTUP, EmployeeAdmin.StartupCommand);
                    this.registerCommand(EmployeeAdmin.NotificationNames.DELETE_USER, EmployeeAdmin.DeleteUserCommand);
                };
                /**
                 * Singleton implementation for the <code>ApplicationFacade</code>.
                 *
                 * @return
                 * 		The <code>Facade</code> subclass instance used throughout the application.
                 */
                ApplicationFacade.getInstance = function () {
                    if (!puremvc.Facade.instance)
                        puremvc.Facade.instance = new ApplicationFacade();
                    return puremvc.Facade.instance;
                };
                return ApplicationFacade;
            })(puremvc.Facade);
            EmployeeAdmin.ApplicationFacade = ApplicationFacade;
        })(EmployeeAdmin || (EmployeeAdmin = {}));
        
		return EmployeeAdmin;
	});
}