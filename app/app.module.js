/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';
import { CrisesModule } from './crises/crises.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutesModule } from './app-routes.module';
import { LoginRoutesModule } from './auth/login-routes.module';
import { DialogService } from './shared/services/dialog.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map