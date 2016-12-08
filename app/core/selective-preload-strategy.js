/**
 * Created by galen on 16/12/6.
 */
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export var PreloadSelectedModules = (function () {
    function PreloadSelectedModules() {
        this.preloadedModules = [];
    }
    PreloadSelectedModules.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Observable.of(null);
        }
    };
    PreloadSelectedModules.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PreloadSelectedModules.ctorParameters = [];
    return PreloadSelectedModules;
}());
//# sourceMappingURL=selective-preload-strategy.js.map