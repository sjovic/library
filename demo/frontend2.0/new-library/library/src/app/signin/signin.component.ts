import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { NgForm } from '@angular/forms';
import { SignService } from './sign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: []
})
export class SigninComponent implements OnInit {

  user = {username: "", password: "", password2: ""};
  error: boolean;
  notSamePasswords: boolean;
  message: string;

  constructor(private signService: SignService, private rout: Router) { }

  ngOnInit() {
    this.error = false;
    this.notSamePasswords = false;
    this.message = "";
  }

  onSignIn(form: NgForm) {
    this.error = false;
    this.notSamePasswords = false;
    this.message = "";

    this.user = form.value;

    if(this.user.password !== this.user.password2) {
      this.notSamePasswords = true;
      this.message = "Passwords are different.";
      return;
    }

    this.signService.signIn(this.user.username, this.user.password)
      .subscribe(
        data=> {
          alert("User: "+data.username+" was succesfully signed in. Now you can login");
          this.rout.navigate(["/login"]);
        },
        error=> {
          this.error = true;
          this.message = "Couldn't sign in. Change username";
        }
      );
  }

  onLogin() {
    this.rout.navigate(['/login']);
  }

}
