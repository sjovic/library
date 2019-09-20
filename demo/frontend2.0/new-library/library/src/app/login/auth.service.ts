import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null); //cuva jedan podatak

   userSubject = new Subject<string>(); //za header

  constructor(private httpClient: HttpClient, private router: Router) { 
  }

  authentication(username: string, password: string) {
    

    return this.httpClient.post<any>("http://localhost:8080/authenticate", {username, password})
      .pipe( map(user => {
            this.currentUserSubject.next(user);
            this.userSubject.next(user.username);

            return user;
      }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value; 
  }

  getUsername() {
    if (this.currentUserSubject.value != null) {
      return this.currentUserSubject.value.username;
    } 
    else return null;
  }

  isAuthenticated() {
    if(this.currentUserSubject.value != null)
      return true;
    else return false;
  }

  hasRoleAdmin() {
    if (this.currentUserSubject.value != null) {
      return this.currentUserSubject.value.roles.includes('ADMIN_ROLE');
    }

    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

}
