/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrisesRoutesModule} from './crises-routes.module';

import {CrisesComponent} from './components/crises.component';
import {CrisisDetailComponent} from './components/crisis-detail.component';
import {CrisisDetailDefaultComponent} from './components/crisis-detail-default.component';
import {CrisesService} from './services/crises.service';

@NgModule({
    imports: [
        CommonModule,
        CrisesRoutesModule
    ],
    declarations: [
        CrisesComponent,
        CrisisDetailComponent,
        CrisisDetailDefaultComponent
    ],
    providers: [
        CrisesService
    ]
})
export class CrisesModule {}
