import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let userinfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (userinfo.token) {
            return true;
        }
        //  not logged in so redirect to login page with the return url
        this.router.navigate(['/auth'], { queryParams: { 'returnUrl': state.url } });
        return false;
    }
}