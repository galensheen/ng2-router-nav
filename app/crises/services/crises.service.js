/**
 * Created by galen on 16/12/5.
 */
import { Injectable } from '@angular/core';
export var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());
var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var crisesPromise = Promise.resolve(CRISES);
export var CrisesService = (function () {
    function CrisesService() {
    }
    CrisesService.prototype.getCrises = function () {
        return crisesPromise;
    };
    CrisesService.prototype.getCrisis = function (id) {
        return crisesPromise.then(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CrisesService.ctorParameters = [];
    return CrisesService;
}());
//# sourceMappingURL=crises.service.js.map