/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from './components/heroes.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroDetailDefaultComponent} from './components/hero-detail-default.component';

import {HeroDetailResolveService} from './services/hero-detail-resolve.service';
import {CanDeactivateGuardService} from '../core/can-deactivate-guard.service';

const heroesRoutes: Routes = [
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
            {path: '', component: HeroDetailDefaultComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule],
    providers: [HeroDetailResolveService]
})
export class HeroesRoutesModule {}
