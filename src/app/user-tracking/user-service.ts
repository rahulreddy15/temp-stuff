import { Injectable } from "@angular/core"
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth"
import { AngularFireDatabase} from "@angular/fire/compat/database"

import { User } from "./user"

@Injectable(
    {providedIn : 'root'}
)
export class UserService {

    //Currently logged in user
    private curUser : User = {name: "Unknown", email: "Unknown", likes: [], friends: []}

    constructor (public db:AngularFireDatabase) {
    }

    /**
     * Sign up new user
     * @param username Username of the new user
     * @param email Email for authentication
     * @param password Passowrd for authentication
     */
    public signup(username:string, email:string, password:string) {

        //Ensure all fields are filled in
        if (username == "" || email == "" || password == "") {
            this.reportError("Missing Information", "All fields must be filled out")

            //Cease execution if value is missing
            return
        }

        //If username already taken
        if (this.getUserByName(username)) {

            //Reset current user
            this.curUser = {name: "Unknown", email: "Unknown", likes: [], friends: []}

            //Report error and cease execution
            this.reportError("Username_Taken", "Sorry, that username is already takem")
            return
        }

        //Acquire authorization from firebase
        const auth = getAuth()

        //Clear errors from previous failed attempts
        this.clearError()

        //Create new user through firebase authentication
        createUserWithEmailAndPassword(auth, email, password)

        //If authentication successful
        .then((userCredential) => {
            const user = userCredential.user

            //Update current user
            this.curUser = { name: username, email: email, likes: [], friends: [] }

            //Add username and password to database
            this.db.list<User>("users").push(this.curUser)
        })

        //If authentication failed
        .catch((error) => {

            //Report error
            const errorCode = error.code
            const errorMessage = error.message
            this.reportError(errorCode, errorMessage)
        })
    }
    
    /**
     * Login currently existing user
     * @param username Username for loggin in user
     * @param email Email for firebase authentication
     * @param password Password for firebase authentication
     */
    public login(username:string, email:string, password:string) {

        //If email is blank
        if (email == "") {

            if (username != "") {

                //User username to find email from databse
                if (this.getUserByName(username)) {

                    //Ensure current user is successfully updated
                    if (this.curUser.name != username) {

                        //If current user not updated, report error and cease execution
                        this.reportError("Unknown", "Something went wrong, try again")
                        return
                    }

                    //update email for authentication
                    email = this.curUser.email

                //If email not found in database
                } else {

                    //Report error and cease execution
                    this.reportError("Invalid Username", "Username not recognized")
                    return
                }

            //If email and username are both blank
            } else {

                //Report error and cease execution
                this.reportError("Missing Information_Login", "Username or Email must be given to login")
                return
            }
        }

        //Retrieve firebase authorization
        const auth = getAuth()

        //Clear error from previous failed attempts
        this.clearError()

        //Sign in with firebase authentication
        signInWithEmailAndPassword(auth, email, password)

        //If authentication successful
        .then((userCredential) => {
            const user = userCredential.user

            //If username is blank
            if (username == "") {

                //Retrieve username from database
                this.getUserByEmail(email)

                //Case in which email is in firebase authentication not given special case
                    //as it should not be possible

                //Ensure username is successfully
                if (this.curUser.email != email) {
                    this.reportError("Unknown", "Something went wrong, try again")
                }
            
            //If username entered
            } else {
                //Set current username to entered username
                this.curUser.name = username
            }
        })

        //If authorization unsuccessful
        .catch((error) => {
            
            //Report error
            const errorCode = error.code
            const errorMessage = error.message
            this.reportError(errorCode, errorMessage)
        })
    }

    /**
     * Report login errors to user
     * @param errorCode Code representation of error
     * @param errorMessage Text representation of error
     */
    reportError(errorCode:string, errorMessage:string) {

        //Find text component for reporting
        const errRep = document.getElementById("login-error")

        //Identify specific error and print accordingly
        if (errRep != null) {
            switch(errorCode) {

                //Firebase error messages
                case 'auth/invalid-email':
                    errRep.textContent = "Invalid Email"
                    break
                case 'auth/user-not-found':
                    errRep.textContent = "Unrecognized email: " + this.curUser.email
                    break
                case 'auth/email-already-in-use':
                    errRep.textContent = "Email already in use"
                    break
                case 'auth/wrong-password':
                    errRep.textContent = "Incorrect password"
                    break
                case 'auth/internal-error':
                    errRep.textContent = "Internal Error"
                    break

                //Custom error messages
                case 'Missing Information':
                    errRep.textContent = "All fields must be filled out"
                    break
                case 'Missing Information_Login':
                    errRep.textContent = "Username or Email required to login"
                    break
                case 'Invalid Username':
                    errRep.textContent = "Username not recognized"
                    break
                case 'Username_Taken':
                    errRep.textContent = "Sorry, that username is already takem"
                    break
                case 'Unknown':
                    errRep.textContent = "Something went wrong, try again"
                    break

                //Default case to catch unexpected errors
                default:
                    errRep.textContent = errorMessage
            }
        }
    }

    /**
     * Clear error output to user
     */
    clearError() {

        //Find error output text element
        const errRep = document.getElementById("login-error")

        //Clear text content
        if (errRep != null) {
            errRep.textContent = ""
        }
    }

    /**
     * Find user in database by username
     * @param username Username of target account
     * @returns Whether username was found in the database as a boolean
     */
    public getUserByName(username: string) {

        //Locate all users in database with given username
        this.db.list<User>('users', ref => ref.orderByChild('name').equalTo(username))
            //set current user to first user in that list
            .valueChanges().subscribe((data: User[]) => this.curUser = data[0])

        //Return true if valid user was found, otherwise false
        if (this.curUser == undefined) {
            return false
        } else {
            return true
        }
    }

    /**
     * Find user in database by email
     * @param email Email of target user
     */
    public getUserByEmail(email: string) {

        //Find list of all users with given email
        this.db.list<User>('users', ref => ref.orderByChild('email').equalTo(email))
            //Set current user to first item in that list
            .valueChanges().subscribe((data: User[]) => this.curUser = data[0])
    }

    /**
     * Read function for current username
     * @returns Username of current user
     */
    public getUsername() {
        return this.curUser.name
    }

    /**
     * Read function for friends of current user
     * @returns Friends of current user as a string array of their usernames
     */
    public getFriends() {
        return this.curUser.friends
    }

    //__________________________________IMPORTANT NOTE__________________________________
    /*
        The following two functions could result in deletion of a user from the database
        if their execution is interrupted. However, my current skill prevents resolution
        of the issue at this time.
    */

    /**
     * Add new friend to current user
     * @param name Username of friend to be added
     */
    public addFriend(name: string) {
        //remove instance of current user in database
        this.db.list<User>('users', ref => ref.orderByChild('name').equalTo(this.curUser.name)).remove()
        //Add friend to current users friend list
        this.curUser.friends.push(name)
        //Re-add current user to the database
        this.db.list<User>('users').push(this.curUser)
    }

    /**
     * Remove a friend from the current user
     * @param name Username of friend to be removed
     */
    public removeFriend(name: string) {
        //Remove instance of current user from the database
        this.db.list<User>('users', ref => ref.orderByChild('name').equalTo(this.curUser.name)).remove()
        //Remove friend from the current user if present
        for (let i = 0; i < this.curUser.friends.length; i ++) {
            if (this.curUser.friends[i] == name) {
                delete this.curUser.friends[i]
                break
            }
        }
        //Re-add the current user to the database
        this.db.list<User>('users').push(this.curUser)
    }
}