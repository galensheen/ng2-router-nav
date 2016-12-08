/**
 * Created by galen on 16/12/6.
 */
import { Injectable } from '@angular/core';
export var DialogService = (function () {
    function DialogService() {
    }
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
    ;
    DialogService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = [];
    return DialogService;
}());
//# sourceMappingURL=dialog.service.js.map