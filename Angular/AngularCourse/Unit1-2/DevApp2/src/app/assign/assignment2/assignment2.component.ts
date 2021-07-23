import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html'
})
export class Assignment2Component implements OnInit {

  username = '';
  usernameField = "Your Username will be:";
  usernameIsTrue = false;
  usernameClear = false;
  usernameSubmit = '';
  usernameSubmitted = "";
  submit = false;
  welcomeMsg = "display: none;";
  deltMsg = "display: none;";

  userSwtch() {
    if (this.username.length > 0) {
      this.usernameIsTrue = true;
      this.usernameClear = true;
    }
    else if (this.username.length === 0) {
      this.usernameIsTrue = false;
    }

  }

  userSubmit() {
    this.welcomeMsg = "display: block;";
    this.deltMsg = "display: none;";
    this.usernameSubmit = this.username;
    this.usernameIsTrue = false;
    this.submit = true;
    this.usernameSubmitted = "display: none;";
    return true;
  }
  userDelete() {
    this.deltMsg = "display: block;";
    setTimeout(() => {
      this.deltMsg = "display: none;";
    }, 3000);
    this.welcomeMsg = "display: none;";
    this.usernameSubmit = '';
    this.username = '';
    this.usernameIsTrue = false;
    this.submit = false;
    this.usernameSubmitted = "display: block;";
    return false;
  }

  constructor() {}

  ngOnInit(): void {}

}
