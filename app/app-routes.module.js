/**
 * Created by galen on 16/12/5.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanDeactivateGuardService } from './core/can-deactivate-guard.service';
import { PreloadSelectedModules } from './core/selective-preload-strategy';
import { AuthService } from './core/auth.service';
import { AuthGuardService } from './core/auth-guard.service';
var appRoutes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];
export var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadSelectedModules })],
                    exports: [RouterModule],
                    providers: [CanDeactivateGuardService, PreloadSelectedModules, AuthService, AuthGuardService]
                },] },
    ];
    /** @nocollapse */
    AppRoutesModule.ctorParameters = [];
    return AppRoutesModule;
}());
//# sourceMappingURL=app-routes.module.js.map