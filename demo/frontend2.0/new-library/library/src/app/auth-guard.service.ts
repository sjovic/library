import { Injectable } from '@angular/core';
import { AuthService } from './login/auth.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, satate: RouterStateSnapshot) {
    const expectedRole = route.data.expectedRole;

    if (this.authService.isAuthenticated()) {
      if (expectedRole === 'user' || (expectedRole === 'admin' && this.authService.hasRoleAdmin())) {
         return true;
      }
      this.router.navigate(['/home']);
      return false;
    }
  
    this.router.navigate(['/login']);
    return false;
  }

}
