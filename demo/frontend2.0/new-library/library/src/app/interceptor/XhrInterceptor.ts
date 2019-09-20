import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    constructor() {}

    //zastita od CSRF
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xhr = request.clone({
            headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        
        return next.handle(xhr);
    }

}