/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CrisesComponent} from './crises.component';

const crisesRoutes: Routes = [
    {path: 'crises', component: CrisesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(crisesRoutes)],
    exports: [RouterModule]
})
export class CrisesRoutesModule {}
