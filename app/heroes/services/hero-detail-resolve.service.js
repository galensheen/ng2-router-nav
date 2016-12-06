/**
 * Created by galen on 16/12/6.
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
var heroes_service_1 = require('./heroes.service');
var HeroDetailResolveService = (function () {
    function HeroDetailResolveService(router, heroesService) {
        this.router = router;
        this.heroesService = heroesService;
    }
    HeroDetailResolveService.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['id'];
        return this.heroesService.getHero(id).then(function (hero) {
            if (!hero) {
                _this.router.navigate(['/heroes']);
                return false;
            }
            return hero;
        });
    };
    HeroDetailResolveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, heroes_service_1.HeroesService])
    ], HeroDetailResolveService);
    return HeroDetailResolveService;
}());
exports.HeroDetailResolveService = HeroDetailResolveService;
//# sourceMappingURL=hero-detail-resolve.service.js.map