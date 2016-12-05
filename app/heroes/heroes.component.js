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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var heroes_service_1 = require('./heroes.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroesService, route, router) {
        this.heroesService = heroesService;
        this.route = route;
        this.router = router;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.route.params.switchMap(function (params) {
            return _this.heroesService.getHeroes();
        });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.router.navigate([hero.id], { relativeTo: this.route });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'heroes.component.html'
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService, router_1.ActivatedRoute, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map