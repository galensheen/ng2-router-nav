/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutesModule} from './admin-routes.module';

import {AdminComponent} from './admin.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutesModule
    ],
    declarations: [
        AdminComponent
    ]
})
export class AdminModule {}
