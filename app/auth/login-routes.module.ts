/**
 * Created by galen on 16/12/6.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../core/auth-guard.service';
import {AuthService} from '../core/auth.service';
import {LoginComponent} from './login.component';

const loginRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule],
    providers: [AuthService, AuthGuardService]
})
export class LoginRoutesModule {}
