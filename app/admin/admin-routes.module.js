/**
 * Created by galen on 16/12/5.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var admin_dashboard_component_1 = require('./admin-dashboard.component');
var manage_crises_component_1 = require('./manage-crises.component');
var manage_heroes_component_1 = require('./manage-heroes.component');
var auth_guard_service_1 = require('../core/auth-guard.service');
var adminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_service_1.AuthGuardService],
        children: [
            {
                path: '',
                canActivateChild: [auth_guard_service_1.AuthGuardService],
                children: [
                    { path: 'crises', component: manage_crises_component_1.ManageCrisesComponent },
                    { path: 'heroes', component: manage_heroes_component_1.ManaggeHeroesComponent },
                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }
                ]
            }
        ]
    }
];
var AdminRoutesModule = (function () {
    function AdminRoutesModule() {
    }
    AdminRoutesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(adminRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutesModule);
    return AdminRoutesModule;
}());
exports.AdminRoutesModule = AdminRoutesModule;
//# sourceMappingURL=admin-routes.module.js.map