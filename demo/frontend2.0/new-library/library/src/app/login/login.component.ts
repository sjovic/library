import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user = {username: "", password: ""};
  error = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.error = false;
    this.user.username = form.value.username;
    this.user.password = form.value.password;

    this.authService.authentication(this.user.username, this.user.password)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.error = true;
      }
    );

  }

  onSignin() {
    this.router.navigate(['/signin']);
  }

}
