/**
 * Created by galen on 16/12/6.
 */
import { Injectable } from '@angular/core';
export var CanDeactivateGuardService = (function () {
    function CanDeactivateGuardService() {
    }
    CanDeactivateGuardService.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuardService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CanDeactivateGuardService.ctorParameters = [];
    return CanDeactivateGuardService;
}());
//# sourceMappingURL=can-deactivate-guard.service.js.map