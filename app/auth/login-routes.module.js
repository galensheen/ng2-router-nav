/**
 * Created by galen on 16/12/6.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_guard_service_1 = require('../core/auth-guard.service');
var auth_service_1 = require('../core/auth.service');
var login_component_1 = require('./login.component');
var loginRoutes = [
    {
        path: 'login', component: login_component_1.LoginComponent
    }
];
var LoginRoutesModule = (function () {
    function LoginRoutesModule() {
    }
    LoginRoutesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(loginRoutes)],
            exports: [router_1.RouterModule],
            providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuardService]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginRoutesModule);
    return LoginRoutesModule;
}());
exports.LoginRoutesModule = LoginRoutesModule;
//# sourceMappingURL=login-routes.module.js.map