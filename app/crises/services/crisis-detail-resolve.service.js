/**
 * Created by galen on 16/12/6.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CrisesService } from './crises.service';
export var CrisisDetailResolveService = (function () {
    function CrisisDetailResolveService(crisesService, router) {
        this.crisesService = crisesService;
        this.router = router;
    }
    CrisisDetailResolveService.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['id'];
        return this.crisesService.getCrisis(id).then(function (crisis) {
            if (!crisis) {
                _this.router.navigate(['/crises']);
                return false;
            }
            return crisis;
        });
    };
    CrisisDetailResolveService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CrisisDetailResolveService.ctorParameters = [
        { type: CrisesService, },
        { type: Router, },
    ];
    return CrisisDetailResolveService;
}());
//# sourceMappingURL=crisis-detail-resolve.service.js.map