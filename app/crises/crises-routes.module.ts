/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CrisesComponent} from './components/crises.component';
import {CrisisDetailComponent} from './components/crisis-detail.component';
import {CrisisDetailDefaultComponent} from './components/crisis-detail-default.component';

const crisesRoutes: Routes = [
    {
        path: 'crises',
        component: CrisesComponent,
        children: [
            {path: ':id', component: CrisisDetailComponent},
            {path: '', component: CrisisDetailDefaultComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(crisesRoutes)],
    exports: [RouterModule]
})
export class CrisesRoutesModule {}
