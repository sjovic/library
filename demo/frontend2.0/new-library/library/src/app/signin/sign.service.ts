import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../login/user.interface';

@Injectable({ providedIn: 'root' })
export class SignService {

    constructor(private httpClient: HttpClient, private router: Router) { 
    
    }

    signIn(username: string, password: string) {
        return this.httpClient.post<any>("http://localhost:8080/signin", {username, password});
    }
}