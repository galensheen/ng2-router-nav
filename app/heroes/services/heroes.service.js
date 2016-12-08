/**
 * Created by galen on 16/12/5.
 */
import { Injectable } from '@angular/core';
export var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());
var HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];
var heroesPromise = Promise.resolve(HEROES);
export var HeroesService = (function () {
    function HeroesService() {
    }
    HeroesService.prototype.getHeroes = function () {
        return heroesPromise;
    };
    HeroesService.prototype.getHero = function (id) {
        return heroesPromise.then(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); });
    };
    HeroesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HeroesService.ctorParameters = [];
    return HeroesService;
}());
//# sourceMappingURL=heroes.service.js.map