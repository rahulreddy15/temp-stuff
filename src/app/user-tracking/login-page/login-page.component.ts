import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from "../user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [UserService]
})
export class LoginPageComponent implements OnInit {

  username: string = "Username Not Found"
  password: string = "Password Not Found"

  constructor(private backend : UserService) { }

  ngOnInit(): void {
  }

  singupUser() {
    let superfield = document.getElementById('log-in-form') as HTMLFormElement
    let username = (superfield.elements[0] as HTMLInputElement).value
    let email = (superfield.elements[1] as HTMLInputElement).value
    let password = (superfield.elements[2] as HTMLInputElement).value

    //this.backend.signup(username, email, password);
    this.backend.addFriend(username)

    this.backend.getFriends().forEach(function (value) {
      console.log(value)
    })
      
  }

  list: string | undefined=""//User[] = [{username: "Bob", email: "no"}]
  loginUser() {
    let superfield = document.getElementById('log-in-form') as HTMLFormElement
    let username = (superfield.elements[0] as HTMLInputElement).value
    let email = (superfield.elements[1] as HTMLInputElement).value
    let password = (superfield.elements[2] as HTMLInputElement).value

    this.backend.login(username, email, password);
  }
}