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
var crises_component_1 = require('./components/crises.component');
var crisis_detail_component_1 = require('./components/crisis-detail.component');
var crisis_detail_default_component_1 = require('./components/crisis-detail-default.component');
var crisis_detail_resolve_service_1 = require('./services/crisis-detail-resolve.service');
var can_deactivate_guard_service_1 = require('../core/can-deactivate-guard.service');
var crisesRoutes = [
    {
        path: '',
        component: crises_component_1.CrisesComponent,
        children: [
            {
                path: ':id',
                component: crisis_detail_component_1.CrisisDetailComponent,
                canDeactivate: [
                    can_deactivate_guard_service_1.CanDeactivateGuardService
                ],
                resolve: {
                    crisis: crisis_detail_resolve_service_1.CrisisDetailResolveService
                }
            },
            { path: '', component: crisis_detail_default_component_1.CrisisDetailDefaultComponent }
        ]
    }
];
var CrisesRoutesModule = (function () {
    function CrisesRoutesModule() {
    }
    CrisesRoutesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(crisesRoutes)],
            exports: [router_1.RouterModule],
            providers: [crisis_detail_resolve_service_1.CrisisDetailResolveService]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisesRoutesModule);
    return CrisesRoutesModule;
}());
exports.CrisesRoutesModule = CrisesRoutesModule;
//# sourceMappingURL=crises-routes.module.js.map