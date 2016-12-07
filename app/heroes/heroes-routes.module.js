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
var heroes_component_1 = require('./components/heroes.component');
var hero_detail_component_1 = require('./components/hero-detail.component');
var hero_detail_default_component_1 = require('./components/hero-detail-default.component');
var hero_detail_resolve_service_1 = require('./services/hero-detail-resolve.service');
var can_deactivate_guard_service_1 = require('../core/can-deactivate-guard.service');
var heroesRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        children: [
            {
                path: ':id',
                component: hero_detail_component_1.HeroDetailComponent,
                canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuardService],
                resolve: {
                    hero: hero_detail_resolve_service_1.HeroDetailResolveService
                }
            },
            { path: '', component: hero_detail_default_component_1.HeroDetailDefaultComponent }
        ]
    }
];
var HeroesRoutesModule = (function () {
    function HeroesRoutesModule() {
    }
    HeroesRoutesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(heroesRoutes)],
            exports: [router_1.RouterModule],
            providers: [hero_detail_resolve_service_1.HeroDetailResolveService]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesRoutesModule);
    return HeroesRoutesModule;
}());
exports.HeroesRoutesModule = HeroesRoutesModule;
//# sourceMappingURL=heroes-routes.module.js.map