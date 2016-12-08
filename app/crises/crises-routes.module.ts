/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CrisesComponent} from './components/crises.component';
import {CrisisDetailComponent} from './components/crisis-detail.component';
import {CrisisDetailDefaultComponent} from './components/crisis-detail-default.component';

import {CrisisDetailResolveService} from './services/crisis-detail-resolve.service';
import {CanDeactivateGuardService} from '../core/can-deactivate-guard.service';

const crisesRoutes: Routes = [
    {
        path: 'crises',
        component: CrisesComponent,
        children: [
            {
                path: ':id',
                component: CrisisDetailComponent,
                canDeactivate: [
                    CanDeactivateGuardService
                ],
                resolve: {
                    crisis: CrisisDetailResolveService
                }
            },
            {path: '', component: CrisisDetailDefaultComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(crisesRoutes)],
    exports: [RouterModule],
    providers: [CrisisDetailResolveService]
})
export class CrisesRoutesModule {
}
