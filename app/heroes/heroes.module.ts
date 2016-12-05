/**
 * Created by galen on 16/12/5.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutesModule} from './heroes-routes.module';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesService} from './heroes.service';
import {HeroDetailDefaultComponent} from './hero-detail-default.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutesModule
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        HeroDetailDefaultComponent
    ],
    providers: [
        HeroesService
    ]
})
export class HeroesModule {}
