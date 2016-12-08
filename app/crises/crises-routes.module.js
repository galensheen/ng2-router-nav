/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrisesComponent } from './components/crises.component';
import { CrisisDetailComponent } from './components/crisis-detail.component';
import { CrisisDetailDefaultComponent } from './components/crisis-detail-default.component';
import { CrisisDetailResolveService } from './services/crisis-detail-resolve.service';
import { CanDeactivateGuardService } from '../core/can-deactivate-guard.service';
var crisesRoutes = [
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
            { path: '', component: CrisisDetailDefaultComponent }
        ]
    }
];
export var CrisesRoutesModule = (function () {
    function CrisesRoutesModule() {
    }
    CrisesRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(crisesRoutes)],
                    exports: [RouterModule],
                    providers: [CrisisDetailResolveService]
                },] },
    ];
    /** @nocollapse */
    CrisesRoutesModule.ctorParameters = [];
    return CrisesRoutesModule;
}());
//# sourceMappingURL=crises-routes.module.js.map