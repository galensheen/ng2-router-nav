/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutesModule } from './heroes-routes.module';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesService } from './services/heroes.service';
import { HeroDetailDefaultComponent } from './components/hero-detail-default.component';
export var HeroesModule = (function () {
    function HeroesModule() {
    }
    HeroesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
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
                },] },
    ];
    /** @nocollapse */
    HeroesModule.ctorParameters = [];
    return HeroesModule;
}());
//# sourceMappingURL=heroes.module.js.map