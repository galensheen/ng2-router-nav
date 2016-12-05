/**
 * Created by galen on 16/12/5.
 */

// import core libs
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// import other modules
import {AdminModule} from './admin/admin.module';
import {CrisesModule} from './crises/crises.module';
import {HeroesModule} from './heroes/heroes.module';

import {AppRoutesModule} from './app-routes.module';

// import service

// import component
import {AppComponent} from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        CrisesModule,
        HeroesModule,
        AppRoutesModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
