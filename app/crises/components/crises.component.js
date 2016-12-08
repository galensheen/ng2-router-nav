/**
 * Created by galen on 16/12/5.
 */
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisesService } from '../services/crises.service';
export var CrisesComponent = (function () {
    function CrisesComponent(route, router, crisesService) {
        this.route = route;
        this.router = router;
        this.crisesService = crisesService;
    }
    CrisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crises = this.route.params.switchMap(function (params) {
            return _this.crisesService.getCrises();
        });
    };
    CrisesComponent.prototype.onSelect = function (crisis) {
        this.router.navigate([crisis.id], { relativeTo: this.route });
    };
    CrisesComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: 'crises.component.html'
                },] },
    ];
    /** @nocollapse */
    CrisesComponent.ctorParameters = [
        { type: ActivatedRoute, },
        { type: Router, },
        { type: CrisesService, },
    ];
    return CrisesComponent;
}());
//# sourceMappingURL=crises.component.js.map