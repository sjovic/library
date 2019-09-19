import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    if(this.authenticationService.currentUserValue != null) {
        let currentToken = this.authenticationService.currentUserValue.token;
        
            request = request.clone({
                setHeaders: { 
                    'Content-Type': `application/json`,
                    Accept: `application/json`,
                    Authorization: `Bearer ${currentToken}`,
                    'Access-Control-Allow-Origin': `http://localhost:8080`,
                    'Access-Control-Allow-Credentials': `true`,
                    'Access-Control-Allow-Headers': `Origin, X-Requested-With, Content-Type, Accept`
                }
            });
        
    }
    
    return next.handle(request);
    }
}