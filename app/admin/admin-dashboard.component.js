/**
 * Created by galen on 16/12/6.
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreloadSelectedModules } from '../core/selective-preload-strategy';
import 'rxjs/add/operator/map';
export var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(route, preloadStrategy) {
        this.route = route;
        this.preloadStrategy = preloadStrategy;
        this.modules = preloadStrategy.preloadedModules;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.sessionId = this.route.queryParams.map(function (params) { return params['session_id'] || 'None'; });
        this.token = this.route.fragment.map(function (fragment) { return fragment || 'None'; });
    };
    AdminDashboardComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: 'admin-dashboard.component.html'
                },] },
    ];
    /** @nocollapse */
    AdminDashboardComponent.ctorParameters = [
        { type: ActivatedRoute, },
        { type: PreloadSelectedModules, },
    ];
    return AdminDashboardComponent;
}());
//# sourceMappingURL=admin-dashboard.component.js.map