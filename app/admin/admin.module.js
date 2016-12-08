/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutesModule } from './admin-routes.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManaggeHeroesComponent } from './manage-heroes.component';
export var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AdminModule.ctorParameters = [];
    return AdminModule;
}());
//# sourceMappingURL=admin.module.js.map