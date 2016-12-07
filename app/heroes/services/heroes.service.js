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
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];
var heroesPromise = Promise.resolve(HEROES);
var HeroesService = (function () {
    function HeroesService() {
    }
    HeroesService.prototype.getHeroes = function () {
        return heroesPromise;
    };
    HeroesService.prototype.getHero = function (id) {
        return heroesPromise.then(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); });
    };
    HeroesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroesService);
    return HeroesService;
}());
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map