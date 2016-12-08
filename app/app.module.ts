/**
 * Created by galen on 16/12/5.
 */

// import core libs
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// import other modules
import {HeroesModule} from './heroes/heroes.module';
import {CrisesModule} from './crises/crises.module';
import {AdminModule} from './admin/admin.module';

import {AppRoutesModule} from './app-routes.module';
import {LoginRoutesModule} from './auth/login-routes.module';

// import service
import {DialogService} from './shared/services/dialog.service';

// import component
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login.component';


@NgModule({
    imports: [
        BrowserModule,
        HeroesModule,
        CrisesModule,
        AdminModule,
        AppRoutesModule,
        LoginRoutesModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
