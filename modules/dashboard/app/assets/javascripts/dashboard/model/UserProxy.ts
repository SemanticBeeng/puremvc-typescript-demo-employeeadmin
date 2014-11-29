///<reference path='../../../../../../common/app/assets/javascripts/common/typings/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='vo/UserVO.ts'/>

/**
 * PureMVC <code>Proxy</code> class object used to control the user list of the application.
 */
import userVOReference = require('./vo/UserVO');

export class UserProxy
		extends puremvc.Proxy {
    /**
     * Return the users list controlled by the <code>Proxy</code>.
     */
    getUsers():userVOReference.UserVO[] {
        return <userVOReference.UserVO[]>/*</>*/ this.data;
    }

    /**
     * Add a user to the list.
     *
     * @param user
     *        The user to add to the list of users.
     */
    addItem(user:userVOReference.UserVO):void {
        this.getUsers().push(user);
    }

    /**
     * Return a user given its user name.
     *
     * @param uname
     *        The user name of the user to find.
     *
     * @return
     *        The user with the given user name or <code>null</code> if none exists with this user
     *        name.
     */
    getUser(uname:string):userVOReference.UserVO {
        var users:userVOReference.UserVO[] = this.getUsers();
        for (var i:number = 0; i < users.length; i++)
            if (users[i].uname === uname)
                return users[i];

        return null;
    }

    /**
     * Update a user informations.
     *
     * @param user
     *        The user to update.
     */
    updateItem(user:userVOReference.UserVO):void {
        var users:userVOReference.UserVO[] = this.getUsers();
        for (var i:number = 0; i < users.length; i++)
            if (users[i].uname === user.uname)
                users[i] = user;
    }

    /**
     * Remove a user from the list.
     *
     * @param uname
     *        The name ot the user to remove.
     */
    deleteItem(uname:string):void {
        var users:userVOReference.UserVO[] = this.getUsers();
        for (var i:number = 0; i < users.length; i++)
            if (users[i].uname === uname)
                users.splice(i, 1);
    }
}