import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // tslint:disable-line

export interface User {
    username: string;
    roles: string[];
}

@Injectable()
export class AuthService {
  user: User;
  private authenticated = false;
  private headers;

  constructor(private httpClient: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        const base64Credential = btoa(username + ':' + password);
        const headers = new HttpHeaders({authorization: 'Basic ' + base64Credential});
        return this.httpClient.get<User>('http://localhost:8080/user', {headers: headers})
            .map(
                (user) => {
                    this.headers = headers;
                    this.authenticated = true;
                    return this.user = user;
                }
            )
            .catch(
                (httpErrorResponse: HttpErrorResponse) => {
                    return Observable.throw(httpErrorResponse);
                }
            );
    }

    getAuthHeaders() {
        return this.headers;
    }

    getUsername() {
        if (this.user) {
            return this.user.username;
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }

    hasRoleAdmin() {
        if (this.user) {
            return this.user.roles.includes('ROLE_ADMIN');
        }
    }

    logout() {
        this.authenticated = false;
        this.user = null;
        this.headers = null;
        this.router.navigate(['/login']);
    }
}
