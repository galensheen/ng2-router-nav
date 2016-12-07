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
var can_deactivate_guard_service_1 = require('./core/can-deactivate-guard.service');
var selective_preload_strategy_1 = require('./core/selective-preload-strategy');
var auth_service_1 = require('./core/auth.service');
var auth_guard_service_1 = require('./core/auth-guard.service');
var appRoutes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'crises',
        loadChildren: 'app/crises/crises.module#CrisesModule',
        data: {
            preload: true
        }
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes, { preloadingStrategy: selective_preload_strategy_1.PreloadSelectedModules })],
            exports: [router_1.RouterModule],
            providers: [can_deactivate_guard_service_1.CanDeactivateGuardService, selective_preload_strategy_1.PreloadSelectedModules, auth_service_1.AuthService, auth_guard_service_1.AuthGuardService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutesModule);
    return AppRoutesModule;
}());
exports.AppRoutesModule = AppRoutesModule;
//# sourceMappingURL=app-routes.module.js.map