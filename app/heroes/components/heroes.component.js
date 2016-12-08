/**
 * Created by galen on 16/12/5.
 */
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
export var HeroesComponent = (function () {
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
    HeroesComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: 'heroes.component.html'
                },] },
    ];
    /** @nocollapse */
    HeroesComponent.ctorParameters = [
        { type: HeroesService, },
        { type: ActivatedRoute, },
        { type: Router, },
    ];
    return HeroesComponent;
}());
//# sourceMappingURL=heroes.component.js.map