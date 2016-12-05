/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrisesRoutesModule} from './crises-routes.module';

import {CrisesComponent} from './crises.component';

@NgModule({
    imports: [
        CommonModule,
        CrisesRoutesModule
    ],
    declarations: [
        CrisesComponent
    ]
})
export class CrisesModule {}
