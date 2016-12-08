/**
 * Created by galen on 16/12/6.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';
import { AuthService } from '../core/auth.service';
import { LoginComponent } from './login.component';
var loginRoutes = [
    {
        path: 'login', component: LoginComponent
    }
];
export var LoginRoutesModule = (function () {
    function LoginRoutesModule() {
    }
    LoginRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(loginRoutes)],
                    exports: [RouterModule],
                    providers: [AuthService, AuthGuardService]
                },] },
    ];
    /** @nocollapse */
    LoginRoutesModule.ctorParameters = [];
    return LoginRoutesModule;
}());
//# sourceMappingURL=login-routes.module.js.map