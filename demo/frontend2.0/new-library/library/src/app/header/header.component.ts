import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  authService: AuthService;
  isLogged = false;
  isAdmin = false;
  user: string;
  loggedUser: Subscription;

  constructor(private auth: AuthService) { 
    this.authService = auth;
  }

  ngOnInit() {
    this.loggedUser = this.authService.userSubject.subscribe(
      (name) => {
        this.isLogged = this.authService.isAuthenticated();
        this.user = name;
        this.isAdmin = this.authService.hasRoleAdmin();
      }
    );
  }

  onLogout() {
    this.isLogged = false;
    this.isAdmin = false;
    this.authService.logout();
  }

  ngOnDestroy() {
    this.loggedUser.unsubscribe();
  }

}
