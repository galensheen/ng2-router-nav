/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroDetailDefaultComponent } from './components/hero-detail-default.component';
import { HeroDetailResolveService } from './services/hero-detail-resolve.service';
import { CanDeactivateGuardService } from '../core/can-deactivate-guard.service';
var heroesRoutes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            {
                path: ':id',
                component: HeroDetailComponent,
                canDeactivate: [CanDeactivateGuardService],
                resolve: {
                    hero: HeroDetailResolveService
                }
            },
            { path: '', component: HeroDetailDefaultComponent }
        ]
    }
];
export var HeroesRoutesModule = (function () {
    function HeroesRoutesModule() {
    }
    HeroesRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(heroesRoutes)],
                    exports: [RouterModule],
                    providers: [HeroDetailResolveService]
                },] },
    ];
    /** @nocollapse */
    HeroesRoutesModule.ctorParameters = [];
    return HeroesRoutesModule;
}());
//# sourceMappingURL=heroes-routes.module.js.map