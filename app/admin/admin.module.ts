/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutesModule} from './admin-routes.module';

import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {ManaggeHeroesComponent} from './manage-heroes.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutesModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManaggeHeroesComponent
    ]
})
export class AdminModule {}
