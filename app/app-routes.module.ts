/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CanDeactivateGuardService} from './core/can-deactivate-guard.service';
import {PreloadSelectedModules} from './core/selective-preload-strategy';
import {AuthService} from './core/auth.service';
import {AuthGuardService} from './core/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuardService]
    },
    {
        path: 'crises',
        loadChildren: 'app/crises/crises.module#CrisesModule',
        data: {
            preload: true
        }
    },
    {path: '', redirectTo: '/heroes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadSelectedModules})],
    exports: [RouterModule],
    providers: [CanDeactivateGuardService, PreloadSelectedModules, AuthService, AuthGuardService]
})
export class AppRoutesModule {}
