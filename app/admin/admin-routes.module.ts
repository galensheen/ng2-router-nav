/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {ManaggeHeroesComponent} from './manage-heroes.component';

import {AuthGuardService} from '../core/auth-guard.service';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuardService],
                children: [
                    {path: 'crises', component: ManageCrisesComponent},
                    {path: 'heroes', component: ManaggeHeroesComponent},
                    {path: '', component: AdminDashboardComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutesModule {}