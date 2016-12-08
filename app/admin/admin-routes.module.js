/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManaggeHeroesComponent } from './manage-heroes.component';
import { AuthGuardService } from '../core/auth-guard.service';
var adminRoutes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'admin',
                canActivateChild: [AuthGuardService],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManaggeHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];
export var AdminRoutesModule = (function () {
    function AdminRoutesModule() {
    }
    AdminRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(adminRoutes)],
                    exports: [RouterModule]
                },] },
    ];
    /** @nocollapse */
    AdminRoutesModule.ctorParameters = [];
    return AdminRoutesModule;
}());
//# sourceMappingURL=admin-routes.module.js.map