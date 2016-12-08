/**
 * Created by galen on 16/12/6.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from './heroes.service';
export var HeroDetailResolveService = (function () {
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
    HeroDetailResolveService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HeroDetailResolveService.ctorParameters = [
        { type: Router, },
        { type: HeroesService, },
    ];
    return HeroDetailResolveService;
}());
//# sourceMappingURL=hero-detail-resolve.service.js.map