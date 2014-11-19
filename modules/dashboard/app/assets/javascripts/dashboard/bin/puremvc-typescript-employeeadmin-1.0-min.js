if(typeof define==="function"){define("EmployeeAdmin",["puremvc"],function(c){var a;(function(d){var e=(function(){function f(){}f.STARTUP="startup";f.NEW_USER="newUser";f.DELETE_USER="deleteUser";f.CANCEL_SELECTED="cancelSelected";f.USER_SELECTED="userSelected";f.USER_ADDED="userAdded";f.USER_UPDATED="userUpdated";f.USER_DELETED="userDeleted";f.ADD_ROLE="addRole";f.ADD_ROLE_RESULT="addRoleResult";return f})();d.NotificationNames=e})(a||(a={}));var a;(function(d){var e=(function(){function f(){}f.ROLE_PROXY="roleProxy";
f.USER_PROXY="userProxy";return f})();d.ProxyNames=e})(a||(a={}));var a;(function(e){var d=(function(){function f(h,g){this.ordinal=null;this.value=null;this.value=h;this.ordinal=g}f.prototype.equals=function(g){return(this.ordinal==g.ordinal&&this.value==g.value)};f.getList=function(){return[f.ACCT,f.SALES,f.PLANT]};f.getComboList=function(){var g=f.getList();g.unshift(f.NONE_SELECTED);return g};f.NONE_SELECTED=new f("Select a department",-1);f.ACCT=new f("Accounting",0);f.SALES=new f("Sales",1);
f.PLANT=new f("Plant",2);f.SHIPPING=new f("Shipping",3);f.QC=new f("Quality Control",4);return f})();e.DeptEnum=d})(a||(a={}));var a;(function(d){var e=(function(){function f(){this.uname="";this.fname="";this.lname="";this.email="";this.password="";this.department=d.DeptEnum.NONE_SELECTED}f.prototype.getIsValid=function(){return this.uname!=""&&this.password!=""&&this.department!=d.DeptEnum.NONE_SELECTED};f.prototype.getGivenName=function(){return this.lname+", "+this.fname};return f})();d.UserVO=e
})(a||(a={}));var a;(function(d){var e=(function(){function f(h,g){this.ordinal=null;this.value=null;this.value=h;this.ordinal=g}f.prototype.equals=function(g){return(this.ordinal==g.ordinal&&this.value==g.value)};f.getList=function(){return[f.ADMIN,f.ACCT_PAY,f.ACCT_RCV,f.EMP_BENEFITS,f.GEN_LEDGER,f.PAYROLL,f.INVENTORY,f.PRODUCTION,f.QUALITY_CTL,f.SALES,f.ORDERS,f.CUSTOMERS,f.SHIPPING,f.RETURNS]};f.getComboList=function(){var g=f.getList();g.unshift(f.NONE_SELECTED);return g};f.getItem=function(g){var j=f.getList();
for(var h=0;h<j.length;h++){if(j[h].ordinal==g){return j[h]}}return null};f.NONE_SELECTED=new f("Select a role",-1);f.ADMIN=new f("Administrator",0);f.ACCT_PAY=new f("Accounts Payable",1);f.ACCT_RCV=new f("Accounts Receivable",2);f.EMP_BENEFITS=new f("Employee Benefits",3);f.GEN_LEDGER=new f("General Ledger",4);f.PAYROLL=new f("Payroll",5);f.INVENTORY=new f("Inventory",6);f.PRODUCTION=new f("Production",7);f.QUALITY_CTL=new f("Quality Control",8);f.SALES=new f("Sales",9);f.ORDERS=new f("Orders",10);
f.CUSTOMERS=new f("Customers",11);f.SHIPPING=new f("Shipping",12);f.RETURNS=new f("Returns",13);return f})();d.RoleEnum=e})(a||(a={}));var a;(function(d){var e=(function(){function f(){this.uname="";this.roles=[]}return f})();d.RoleVO=e})(a||(a={}));var b=this.__extends||function(h,e){for(var g in e){if(e.hasOwnProperty(g)){h[g]=e[g]}}function f(){this.constructor=h}f.prototype=e.prototype;h.prototype=new f()};var a;(function(d){var e=(function(g){b(f,g);function f(){g.apply(this,arguments)}f.prototype.getUsers=function(){return this.data
};f.prototype.addItem=function(h){this.getUsers().push(h)};f.prototype.getUser=function(h){var k=this.getUsers();for(var j=0;j<k.length;j++){if(k[j].uname===h){return k[j]}}return null};f.prototype.updateItem=function(h){var k=this.getUsers();for(var j=0;j<k.length;j++){if(k[j].uname===h.uname){k[j]=h}}};f.prototype.deleteItem=function(h){var k=this.getUsers();for(var j=0;j<k.length;j++){if(k[j].uname===h){k.splice(j,1)}}};return f})(c.Proxy);d.UserProxy=e})(a||(a={}));var a;(function(d){var e=(function(f){b(g,f);
function g(){f.apply(this,arguments)}g.prototype.getRoles=function(){return this.data};g.prototype.addItem=function(h){this.getRoles().push(h)};g.prototype.deleteItem=function(h){var k=this.getRoles();for(var j=0;j<k.length;j++){if(k[j].uname===h){k.splice(j,1);break}}};g.prototype.doesUserHaveRole=function(h,q){var o=this.getRoles();var n=false;for(var l=0;l<o.length;l++){if(o[l].uname===h.uname){var p=o[l].roles;for(var k=0;k<p.length;k++){var m=p[k];if(m.equals(q)){n=true;break}}break}}return n
};g.prototype.addRoleToUser=function(j,n){var l=this.getRoles();var h=false;if(!this.doesUserHaveRole(j,n)){for(var k=0;k<l.length;k++){if(l[k].uname==j.uname){var m=l[k].roles;m.push(n);h=true;break}}}};g.prototype.removeRoleFromUser=function(h,p){var n=this.getRoles();if(this.doesUserHaveRole(h,p)){for(var l=0;l<n.length;l++){if(n[l].uname===h.uname){var o=n[l].roles;for(var k=0;k<o.length;k++){var m=o[k];if(m.equals(p)){o.splice(k,1);break}}break}}}};g.prototype.getUserRoles=function(h){var k=this.getRoles();
var l=[];for(var j=0;j<k.length;j++){if(k[j].uname===h){l=k[j].roles;break}}return l};return g})(c.Proxy);d.RoleProxy=e})(a||(a={}));var a;(function(d){var e=(function(f){b(g,f);function g(){f.apply(this,arguments)}g.prototype.execute=function(h){var i=new d.UserProxy(d.ProxyNames.USER_PROXY,this.generateUsers());var j=new d.RoleProxy(d.ProxyNames.ROLE_PROXY,this.generateRoles());this.facade.registerProxy(i);this.facade.registerProxy(j)};g.prototype.generateUsers=function(){var h;var i=[];h=new d.UserVO();
h.uname="lstooge";h.fname="Larry";h.lname="StoogeX";h.email="larry@stooges.com";h.password="ijk456";h.department=d.DeptEnum.ACCT;i.push(h);h=new d.UserVO();h.uname="cstooge";h.fname="Curly";h.lname="Stooge";h.email="curly@stooges.com";h.password="xyz987";h.department=d.DeptEnum.SALES;i.push(h);h=new d.UserVO();h.uname="mstooge";h.fname="Moe";h.lname="Stooge";h.email="moe@stooges.com";h.password="abc123";h.department=d.DeptEnum.PLANT;i.push(h);return i};g.prototype.generateRoles=function(){var i;var h=[];
i=new d.RoleVO();i.uname="lstooge";i.roles=[d.RoleEnum.PAYROLL,d.RoleEnum.EMP_BENEFITS];h.push(i);i=new d.RoleVO();i.uname="cstooge";i.roles=[d.RoleEnum.ACCT_PAY,d.RoleEnum.ACCT_RCV,d.RoleEnum.GEN_LEDGER];h.push(i);i=new d.RoleVO();i.uname="mstooge";i.roles=[d.RoleEnum.INVENTORY,d.RoleEnum.PRODUCTION,d.RoleEnum.SALES,d.RoleEnum.SHIPPING];h.push(i);return h};return g})(c.SimpleCommand);d.PrepModelCommand=e})(a||(a={}));var a;(function(d){var e=(function(){function f(){}f.USER_FORM_MEDIATOR="userFormMediator";
f.USER_LIST_MEDIATOR="userListMediator";f.ROLE_PANEL_MEDIATOR="rolePanelMediator";return f})();d.MediatorNames=e})(a||(a={}));var a;(function(e){var f=(function(){function g(){this.listenerMap=null;this.listenerMap={}}g.prototype.dispatchEvent=function(n,m){if(m===void 0){m=null}if(typeof n=="undefined"){return}if(typeof this.listenerMap[g.QUEUE_PATTERN+n]=="undefined"){return}var j=this.listenerMap[g.QUEUE_PATTERN+n].slice(0);var h=j.length;for(var l=0;l<h;l++){var k=j[l];if(typeof k.context!="undefined"){k.listener.call(k.context,n,m)
}else{k.listener.call(this,n,m)}}};g.prototype.addEventListener=function(o,p,n){if(n===void 0){n=null}if(typeof o=="undefined"){return}if(typeof p!="function"){return}var l=new d(p,n);var j;if(typeof this.listenerMap[g.QUEUE_PATTERN+o]=="undefined"){j=this.listenerMap[g.QUEUE_PATTERN+o]=[]}else{j=this.listenerMap[g.QUEUE_PATTERN+o]}var h=j.length;for(var m=0;m<h;m++){var k=j[m];if(k.equals(l)){return}}j.push(l)};g.prototype.removeEventListener=function(n,o,m){if(m===void 0){m=null}if(typeof n=="undefined"){return
}if(typeof o=="undefined"){return}if(typeof this.listenerMap[g.QUEUE_PATTERN+n]=="undefined"){return}var j=this.listenerMap[g.QUEUE_PATTERN+n];var h=j.length;for(var l=0;l<h;l++){var k=j[l];if(k.equals(new d(o,m))){j.splice(l,1);return}}};g.prototype.destroy=function(){this.listenerMap={}};g.QUEUE_PATTERN="@_@";return g})();e.UiComponent=f;var d=(function(){function g(i,h){this.listener=i;this.context=h}g.prototype.equals=function(h){if(h.listener===this.listener){if(typeof h.context!="undefined"){if(h.context==null&&this.context==null){return true
}if(h.context===this.context){return true}}}return false};return g})()})(a||(a={}));var a;(function(e){var d=(function(g){b(f,g);function f(h){g.call(this);this.userListPanel=null;this.userList=null;this.newButton=null;this.deleteButton=null;this.selectedUser=null;this.userTotal=null;this.users=null;this.userListPanel=h;this.initializeChildren();this.bindListeners()}f.prototype.initializeChildren=function(){this.userList=this.userListPanel.find(".user-list");this.userTotal=this.userListPanel.find(".user-total");
this.userList.jqGrid({datatype:"local",width:630,height:160,colNames:["User Name","First Name","Last Name","Email","Department"],colModel:[{name:"uname",index:"uname",width:125},{name:"fname",index:"fname",width:125},{name:"lname",index:"lname",width:125},{name:"email",index:"email",width:130},{name:"department",index:"department",width:125}]});this.newButton=this.userListPanel.find(".new-button").button();this.deleteButton=this.userListPanel.find(".delete-button").button();this.deleteButton.button("disable")
};f.prototype.bindListeners=function(){var h=".UserList";this.userList.jqGrid("setGridParam",{onSelectRow:jQuery.proxy(this,"userList_selectHandler")});this.newButton.on("click"+h,jQuery.proxy(this,"newButton_clickHandler"));this.deleteButton.on("click"+h,jQuery.proxy(this,"deleteButton_clickHandler"))};f.prototype.unbindListeners=function(){var h=".UserList";this.userList.jqGrid("setGridParam",{onSelectRow:null});this.newButton.off("click"+h);this.deleteButton.off("click"+h)};f.prototype.destroy=function(){g.prototype.destroy.call(this);
this.unbindListeners()};f.prototype.setUsers=function(h){this.users=h;this.userTotal.text(h.length);this.userList.jqGrid("clearGridData");for(var k=0;k<h.length;k++){var j=h[k];var l={uname:j.uname,fname:j.fname,lname:j.lname,email:j.email,department:j.department.value};this.userList.jqGrid("addRowData",k+1,l)}};f.prototype.getSelectedUser=function(){return this.selectedUser};f.prototype.deSelect=function(){this.userList.jqGrid("resetSelection");this.selectedUser=null;this.deleteButton.button("disable")
};f.prototype.userList_selectHandler=function(m){var l=this.userList.jqGrid("getRowData",m);var h;for(var j=0;j<this.users.length;j++){var k=this.users[j];if(k.uname===l.uname){h=l.uname;break}}this.selectedUser=h;this.dispatchEvent(f.SELECT);this.deleteButton.button("enable")};f.prototype.newButton_clickHandler=function(){this.deSelect();this.dispatchEvent(f.NEW)};f.prototype.deleteButton_clickHandler=function(){this.dispatchEvent(f.DELETE)};f.NEW="new";f.DELETE="delete";f.SELECT="select";return f
})(e.UiComponent);e.UserList=d})(a||(a={}));var a;(function(d){var e=(function(f){b(g,f);function g(i,h){f.call(this,i,h);this.userList=null;this.registerListeners();var j=this.facade.retrieveProxy(d.ProxyNames.USER_PROXY);h.setUsers(j.getUsers())}g.prototype.registerListeners=function(){var h=this.getUserList();h.addEventListener(d.UserList.NEW,this.onNew,this);h.addEventListener(d.UserList.DELETE,this.onDelete,this);h.addEventListener(d.UserList.SELECT,this.onSelect,this)};g.prototype.unregisterListeners=function(){var h=this.getUserList();
h.removeEventListener(d.UserList.NEW,this.onNew,this);h.removeEventListener(d.UserList.DELETE,this.onDelete,this);h.removeEventListener(d.UserList.SELECT,this.onSelect,this)};g.prototype.getUserList=function(){return this.viewComponent};g.prototype.listNotificationInterests=function(){return[d.NotificationNames.CANCEL_SELECTED,d.NotificationNames.USER_UPDATED,d.NotificationNames.USER_ADDED,d.NotificationNames.USER_DELETED]};g.prototype.handleNotification=function(i){var h=this.getUserList();var j=this.facade.retrieveProxy(d.ProxyNames.USER_PROXY);
switch(i.getName()){case d.NotificationNames.CANCEL_SELECTED:h.deSelect();break;case d.NotificationNames.USER_UPDATED:h.setUsers(j.getUsers());h.deSelect();break;case d.NotificationNames.USER_ADDED:h.setUsers(j.getUsers());h.deSelect();break;case d.NotificationNames.USER_DELETED:h.setUsers(j.getUsers());h.deSelect();break}};g.prototype.onNew=function(){var h=new d.UserVO();this.sendNotification(d.NotificationNames.NEW_USER,h)};g.prototype.onDelete=function(l,k){var h=this.getUserList();var i=h.getSelectedUser();
var m=this.facade.retrieveProxy(d.ProxyNames.USER_PROXY);var j=m.getUser(i);this.sendNotification(d.NotificationNames.DELETE_USER,j)};g.prototype.onSelect=function(l,k){var h=this.getUserList();var i=h.getSelectedUser();var m=this.facade.retrieveProxy(d.ProxyNames.USER_PROXY);var j=m.getUser(i);this.sendNotification(d.NotificationNames.USER_SELECTED,j)};g.prototype.onRemove=function(){this.unregisterListeners();this.getUserList().destroy()};return g})(c.Mediator);d.UserListMediator=e})(a||(a={}));
var a;(function(e){var d=(function(g){b(f,g);function f(h){g.call(this);this.userFormPanel=null;this.uname=null;this.fname=null;this.lname=null;this.email=null;this.password=null;this.confirm=null;this.department=null;this.cancelButton=null;this.submitButton=null;this.selectedUname=null;this.user=null;this.userRoles=null;this.mode=null;this.userFormPanel=h;this.initializeChildren();this.bindListeners();this.clearForm();this.setEnabled(false)}f.prototype.initializeChildren=function(){this.selectedUname=this.userFormPanel.find(".selected-uname");
this.uname=this.userFormPanel.find(".uname");this.fname=this.userFormPanel.find(".fname");this.lname=this.userFormPanel.find(".lname");this.email=this.userFormPanel.find(".email");this.password=this.userFormPanel.find(".password");this.confirm=this.userFormPanel.find(".confirm");this.department=this.userFormPanel.find(".department");this.submitButton=this.userFormPanel.find(".submit-button").button();this.cancelButton=this.userFormPanel.find(".cancel-button").button()};f.prototype.bindListeners=function(){var i=".UserForm";
var h=jQuery.proxy(this,"field_focusHandler");this.uname.on("focus"+i,h);this.password.on("focus"+i,h);this.confirm.on("focus"+i,h);this.department.on("focus"+i,h);this.submitButton.on("click"+i,jQuery.proxy(this,"submitButton_clickHandler"));this.cancelButton.on("click"+i,jQuery.proxy(this,"cancelButton_clickHandler"))};f.prototype.unbindListeners=function(){var h=".UserForm";this.uname.off("focus"+h);this.password.off("focus"+h);this.confirm.off("focus"+h);this.department.off("focus"+h);this.submitButton.off("click"+h);
this.cancelButton.off("click"+h)};f.prototype.fillList=function(l){var n="";for(var k=0;k<l.length;k++){var j=l[k];var m='value="'+j.ordinal+'"';var h="";if(this.user&&j.equals(this.user.department)){h="selected"}if(!this.user&&j.equals(e.DeptEnum.NONE_SELECTED)){h="selected"}n+="<option "+m+" "+h+" >"+j.value+"</option>"}this.department.html(n)};f.prototype.setFocus=function(){this.fname.focus()};f.prototype.setUser=function(h){this.user=h;if(!h){this.clearForm()}else{this.selectedUname.text(h.uname);
this.uname.val(h.uname);this.fname.val(h.fname);this.lname.val(h.lname);this.email.val(h.email);this.password.val(h.password);this.confirm.val(h.password);this.fillList(e.DeptEnum.getComboList())}};f.prototype.getUser=function(){this.updateUser();return this.user};f.prototype.updateUser=function(){this.user.uname=this.uname.val();this.user.fname=this.fname.val();this.user.lname=this.lname.val();this.user.email=this.email.val();this.user.password=this.password.val();var i=parseInt(this.department.val())+1;
var h=e.DeptEnum.getComboList();this.user.department=h[i]};f.prototype.clearForm=function(){this.selectedUname.text("");this.uname.val("");this.fname.val("");this.lname.val("");this.email.val("");this.password.val("");this.confirm.val("");this.fillList([]);this.setFieldError("email",false);this.setFieldError("uname",false);this.setFieldError("password",false);this.setFieldError("confirm",false);this.setFieldError("department",false)};f.prototype.setEnabled=function(h){if(h){this.fname.removeAttr("disabled");
this.lname.removeAttr("disabled");this.email.removeAttr("disabled");this.password.removeAttr("disabled");this.confirm.removeAttr("disabled");this.department.removeAttr("disabled");this.submitButton.button("enable");this.cancelButton.button("enable");if(this.mode==f.MODE_EDIT){this.uname.attr("disabled","disabled")}else{this.uname.removeAttr("disabled")}}else{this.uname.attr("disabled","disabled");this.fname.attr("disabled","disabled");this.lname.attr("disabled","disabled");this.email.attr("disabled","disabled");
this.password.attr("disabled","disabled");this.confirm.attr("disabled","disabled");this.department.attr("disabled","disabled");this.submitButton.button("disable");this.cancelButton.button("disable")}};f.prototype.setMode=function(h){this.mode=h;switch(h){case f.MODE_ADD:this.submitButton.find(".ui-button-text").text("Add");break;case f.MODE_EDIT:this.submitButton.find(".ui-button-text").text("Save");break}};f.prototype.destroy=function(){g.prototype.destroy.call(this);this.unbindListeners()};f.prototype.submitButton_clickHandler=function(){if(this.getErrors()){return
}this.updateUser();var h=this.getUser();if(h.getIsValid()){if(this.mode==f.MODE_ADD){this.dispatchEvent(f.ADD)}else{this.dispatchEvent(f.UPDATE)}}};f.prototype.cancelButton_clickHandler=function(){this.dispatchEvent(f.CANCEL)};f.prototype.field_focusHandler=function(h){this.setFieldError(h.target.id,false)};f.prototype.getErrors=function(){var i=false;if(this.uname.val()==""){this.setFieldError("uname",i=true)}else{this.setFieldError("uname",false)}if(this.password.val()==""){this.setFieldError("password",i=true)
}else{this.setFieldError("password",false)}if(this.password.val()!=""&&this.confirm.val()!=this.password.val()){this.setFieldError("confirm",i=true)}else{this.setFieldError("confirm",false)}var k=parseInt(this.department.val())+1;var j=e.DeptEnum.getComboList();var h=j[k];if(h.equals(e.DeptEnum.NONE_SELECTED)){this.setFieldError("department",i=true)}else{this.setFieldError("department",false)}var l=/^[a-z0-9!#$%&'*+\/=?^_`\{|\}~\.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/;if(this.email.val()!=""&&!l.test(this.email.val())){this.setFieldError("email",i=true)
}else{this.setFieldError("email",false)}return i};f.prototype.setFieldError=function(k,i){var h=this.userFormPanel.find('label[for="'+k+'"]');var j=this.userFormPanel.find("#"+k);if(i){h.addClass("fieldError");j.addClass("fieldError")}else{h.removeClass("fieldError");j.removeClass("fieldError")}};f.ADD="add";f.UPDATE="update";f.CANCEL="cancel";f.MODE_ADD="modeAdd";f.MODE_EDIT="modeEdit";return f})(e.UiComponent);e.UserForm=d})(a||(a={}));var a;(function(d){var e=(function(g){b(f,g);function f(i,h){g.call(this,i,h);
this.userProxy=null;this.registerListeners();this.userProxy=this.facade.retrieveProxy(d.ProxyNames.USER_PROXY)}f.prototype.getUserForm=function(){return this.viewComponent};f.prototype.registerListeners=function(){var h=this.getUserForm();h.addEventListener(d.UserForm.ADD,this.onAdd,this);h.addEventListener(d.UserForm.UPDATE,this.onUpdate,this);h.addEventListener(d.UserForm.CANCEL,this.onCancel,this)};f.prototype.unregisterListeners=function(){var h=this.getUserForm();h.addEventListener(d.UserForm.ADD,this.onAdd,this);
h.addEventListener(d.UserForm.UPDATE,this.onUpdate,this);h.addEventListener(d.UserForm.CANCEL,this.onCancel,this)};f.prototype.onAdd=function(j,i){var h=this.getUserForm().getUser();this.userProxy.addItem(h);this.sendNotification(d.NotificationNames.USER_ADDED,h);var k=this.getUserForm();k.clearForm();k.setEnabled(false);k.setMode(d.UserForm.MODE_ADD)};f.prototype.onUpdate=function(j,i){var h=this.getUserForm().getUser();this.userProxy.updateItem(h);this.sendNotification(d.NotificationNames.USER_UPDATED,h);
var k=this.getUserForm();k.clearForm();k.setEnabled(false);k.setMode(d.UserForm.MODE_ADD)};f.prototype.onCancel=function(i,h){this.sendNotification(d.NotificationNames.CANCEL_SELECTED);var j=this.getUserForm();j.clearForm();j.setEnabled(false);j.setMode(d.UserForm.MODE_ADD)};f.prototype.listNotificationInterests=function(){return[d.NotificationNames.NEW_USER,d.NotificationNames.USER_DELETED,d.NotificationNames.USER_SELECTED]};f.prototype.handleNotification=function(i){var j=this.getUserForm();var h;
switch(i.getName()){case d.NotificationNames.NEW_USER:j.setUser(i.getBody());j.setMode(d.UserForm.MODE_ADD);j.setEnabled(true);j.setFocus();break;case d.NotificationNames.USER_DELETED:j.clearForm();j.setEnabled(false);break;case d.NotificationNames.USER_SELECTED:h=i.getBody();j.clearForm();j.setUser(h);j.setMode(d.UserForm.MODE_EDIT);j.setEnabled(true);j.setFocus();break}};f.prototype.onRemove=function(){this.unregisterListeners();this.getUserForm().destroy()};f.ADD="add";f.UPDATE="update";f.CANCEL="cancel";
f.MODE_ADD="modeAdd";f.MODE_EDIT="modeEdit";return f})(c.Mediator);d.UserFormMediator=e})(a||(a={}));var a;(function(d){var e=(function(g){b(f,g);function f(h){g.call(this);this.user=null;this.userRoles=null;this.selectedRole=null;this.mode=null;this.rolePanel=null;this.roleList=null;this.userRoleList=null;this.addRoleButton=null;this.removeRoleButton=null;this.selectedFullname=null;this.rolePanel=h;this.initializeChildren();this.bindListeners();this.fillRoleList();this.setEnabled(false)}f.prototype.initializeChildren=function(){this.userRoleList=this.rolePanel.find(".user-role-list");
this.userRoleList.jqGrid({datatype:"local",width:280,height:170,colNames:["Roles"],colModel:[{name:"value",index:"value"}]});this.selectedFullname=this.rolePanel.find(".selected-fullname");this.roleList=this.rolePanel.find(".role-list");this.addRoleButton=this.rolePanel.find(".add-role-button").button();this.removeRoleButton=this.rolePanel.find(".remove-role-button").button()};f.prototype.bindListeners=function(){var h=".UserRoleList";this.addRoleButton.on("click"+h,jQuery.proxy(this,"addRoleButton_clickHandler"));
this.removeRoleButton.on("click"+h,jQuery.proxy(this,"removeRoleButton_clickHandler"));this.roleList.on("change"+h,jQuery.proxy(this,"roleList_changeHandler"));this.userRoleList.jqGrid("setGridParam",{onSelectRow:jQuery.proxy(this,"userRoleList_changeHandler")})};f.prototype.unbindListeners=function(){var h=".UserRoleList";this.addRoleButton.off("click"+h);this.removeRoleButton.off("click"+h);this.roleList.off("change"+h);this.userRoleList.jqGrid("setGridParam",{onSelectRow:null})};f.prototype.fillRoleList=function(){var k=d.RoleEnum.getComboList();
this.roleList.empty();var m="";for(var j=0;j<k.length;j++){var n=k[j];var l='value="'+n.ordinal+'"';var h=j==0?"selected":"";m+="<option "+l+" "+h+" >"+n.value+"</option>"}this.roleList.html(m)};f.prototype.setUserRoles=function(j){this.userRoleList.jqGrid("clearGridData");if(!j){return}this.userRoles=j;for(var h=0;h<j.length;h++){var k=j[h];this.userRoleList.jqGrid("addRowData",h+1,k)}};f.prototype.getUser=function(){return this.user};f.prototype.setUser=function(h){this.user=h;this.selectedFullname.text(h.lname+", "+h.fname)
};f.prototype.getSelectedRole=function(){return this.selectedRole};f.prototype.setEnabled=function(h){if(h){this.userRoleList.removeAttr("disabled");this.roleList.removeAttr("disabled");this.addRoleButton.button("enable");this.removeRoleButton.button("enable")}else{this.userRoleList.attr("disabled","disabled");this.roleList.attr("disabled","disabled");this.roleList.prop("selectedIndex",0);this.addRoleButton.button("disable");this.removeRoleButton.button("disable")}};f.prototype.setMode=function(h){switch(h){case f.ADD_MODE:this.addRoleButton.button("enable");
this.removeRoleButton.button("disable");break;case f.REMOVE_MODE:this.addRoleButton.button("disable");this.removeRoleButton.button("enable");this.roleList.prop("selectedIndex",0);break;default:this.addRoleButton.button("disable");this.removeRoleButton.button("disable")}};f.prototype.clearForm=function(){this.user=null;this.setUserRoles(null);this.selectedFullname.text("");this.roleList.prop("selectedIndex",0);this.userRoleList.jqGrid("resetSelection")};f.prototype.destroy=function(){g.prototype.destroy.call(this);
this.unbindListeners()};f.prototype.addRoleButton_clickHandler=function(){this.dispatchEvent(f.ADD)};f.prototype.removeRoleButton_clickHandler=function(){this.dispatchEvent(f.REMOVE)};f.prototype.userRoleList_changeHandler=function(i){var h=this.userRoleList.jqGrid("getInd",i);this.selectedRole=this.userRoles[h-1];this.setMode(f.REMOVE_MODE)};f.prototype.roleList_changeHandler=function(){this.userRoleList.jqGrid("resetSelection");var k=d.RoleEnum.getComboList();this.selectedRole=k[this.roleList.prop("selectedIndex")];
var h=false;for(var j=0;j<this.userRoles.length;j++){var l=this.userRoles[j];if(l.equals(this.selectedRole)){h=true;break}}if(this.selectedRole==d.RoleEnum.NONE_SELECTED||h){this.setMode(null)}else{this.setMode(f.ADD_MODE)}};f.ADD="add";f.REMOVE="remove";f.ADD_MODE="addMode";f.REMOVE_MODE="removeMode";return f})(d.UiComponent);d.RolePanel=e})(a||(a={}));var a;(function(d){var e=(function(g){b(f,g);function f(i,h){g.call(this,i,h);this.roleProxy=null;this.registerListeners();this.roleProxy=this.facade.retrieveProxy(d.ProxyNames.ROLE_PROXY)
}f.prototype.getRolePanel=function(){return this.viewComponent};f.prototype.registerListeners=function(){var h=this.getRolePanel();h.addEventListener(d.RolePanel.ADD,this.onAddRole,this);h.addEventListener(d.RolePanel.REMOVE,this.onRemoveRole,this)};f.prototype.unregisterListeners=function(){var h=this.getRolePanel();h.removeEventListener(d.RolePanel.ADD,this.onAddRole,this);h.removeEventListener(d.RolePanel.REMOVE,this.onRemoveRole,this)};f.prototype.onAddRole=function(i,h){this.roleProxy.addRoleToUser(this.getRolePanel().getUser(),this.getRolePanel().getSelectedRole());
this.updateUserRoleList();this.getRolePanel().setMode(null)};f.prototype.onRemoveRole=function(i,h){this.roleProxy.removeRoleFromUser(this.getRolePanel().getUser(),this.getRolePanel().getSelectedRole());this.updateUserRoleList();this.getRolePanel().setMode(null)};f.prototype.updateUserRoleList=function(){var h=this.getRolePanel().getUser();var i=this.roleProxy.getUserRoles(h.uname);this.getRolePanel().setUserRoles(i)};f.prototype.listNotificationInterests=function(){return[d.NotificationNames.NEW_USER,d.NotificationNames.USER_ADDED,d.NotificationNames.USER_UPDATED,d.NotificationNames.USER_DELETED,d.NotificationNames.CANCEL_SELECTED,d.NotificationNames.USER_SELECTED,d.NotificationNames.ADD_ROLE_RESULT]
};f.prototype.handleNotification=function(h){var j=this.getRolePanel();switch(h.getName()){case d.NotificationNames.NEW_USER:j.clearForm();j.setEnabled(false);break;case d.NotificationNames.USER_ADDED:j.setUser(h.getBody());var i=new d.RoleVO();i.uname=j.getUser().uname;this.roleProxy.addItem(i);j.clearForm();j.setEnabled(false);break;case d.NotificationNames.USER_UPDATED:j.clearForm();j.setEnabled(false);break;case d.NotificationNames.USER_DELETED:j.clearForm();j.setEnabled(false);break;case d.NotificationNames.CANCEL_SELECTED:j.clearForm();
j.setEnabled(false);break;case d.NotificationNames.USER_SELECTED:j.clearForm();j.setEnabled(true);j.setMode(null);j.setUser(h.getBody());this.updateUserRoleList();break;case d.NotificationNames.ADD_ROLE_RESULT:this.updateUserRoleList();break}};f.prototype.onRemove=function(){this.unregisterListeners();this.getRolePanel().destroy()};return f})(c.Mediator);d.RolePanelMediator=e})(a||(a={}));var a;(function(d){var e=(function(f){b(g,f);function g(){f.apply(this,arguments)}g.prototype.execute=function(l){var n=l.getBody();
var o=new d.UserForm(n.find(".user-form-panel"));var h=new d.UserList(n.find(".user-list-panel"));var m=new d.RolePanel(n.find(".role-panel"));var j=new d.UserListMediator(d.MediatorNames.USER_LIST_MEDIATOR,h);var i=new d.UserFormMediator(d.MediatorNames.USER_FORM_MEDIATOR,o);var k=new d.RolePanelMediator(d.MediatorNames.ROLE_PANEL_MEDIATOR,m);this.facade.registerMediator(i);this.facade.registerMediator(j);this.facade.registerMediator(k)};return g})(c.SimpleCommand);d.PrepViewCommand=e})(a||(a={}));
var a;(function(e){var d=(function(g){b(f,g);function f(){g.apply(this,arguments)}f.prototype.initializeMacroCommand=function(){this.addSubCommand(e.PrepModelCommand);this.addSubCommand(e.PrepViewCommand)};return f})(c.MacroCommand);e.StartupCommand=d})(a||(a={}));var a;(function(d){var e=(function(g){b(f,g);function f(){g.apply(this,arguments)}f.prototype.execute=function(i){var h=i.getBody();var j=this.facade.retrieveProxy(d.ProxyNames.USER_PROXY);var k=this.facade.retrieveProxy(d.ProxyNames.ROLE_PROXY);
j.deleteItem(h.uname);k.deleteItem(h.uname);this.sendNotification(d.NotificationNames.USER_DELETED)};return f})(c.SimpleCommand);d.DeleteUserCommand=e})(a||(a={}));var a;(function(d){var e=(function(f){b(g,f);function g(){f.apply(this,arguments)}g.prototype.startup=function(i,h){this.sendNotification(d.NotificationNames.STARTUP,i)};g.prototype.initializeController=function(){f.prototype.initializeController.call(this);this.registerCommand(d.NotificationNames.STARTUP,d.StartupCommand);this.registerCommand(d.NotificationNames.DELETE_USER,d.DeleteUserCommand)
};g.getInstance=function(){if(!c.Facade.instance){c.Facade.instance=new g()}return c.Facade.instance};return g})(c.Facade);d.ApplicationFacade=e})(a||(a={}));return a})};