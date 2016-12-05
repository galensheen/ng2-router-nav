/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from './components/heroes.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroDetailDefaultComponent} from './components/hero-detail-default.component'

const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            {path: ':id', component: HeroDetailComponent},
            {path: '', component: HeroDetailDefaultComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class HeroesRoutesModule {}
