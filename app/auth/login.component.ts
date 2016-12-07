/**
 * Created by galen on 16/12/6.
 */

import {Component} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };

                this.router.navigate([redirect], navigationExtras);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
