/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CanDeactivateGuardService} from './core/can-deactivate-guard.service';

const appRoutes: Routes = [
    {path: '', redirectTo: '/heroes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [CanDeactivateGuardService]
})
export class AppRoutesModule {}
