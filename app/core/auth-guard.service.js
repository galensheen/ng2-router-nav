/**
 * Created by galen on 16/12/6.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService.prototype.canLoad = function (route) {
        console.log('canLoad route: ', route);
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        var sessionId = 123444;
        var navigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    AuthGuardService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuardService.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return AuthGuardService;
}());
//# sourceMappingURL=auth-guard.service.js.map