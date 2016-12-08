/**
 * Created by galen on 16/12/5.
 */
import 'rxjs/add/operator/switchMap';
import { Component, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../../shared/services/dialog.service';
export var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
    }
    Object.defineProperty(CrisisDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.crisis = data.crisis;
            _this.editName = _this.crisis.name;
        });
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.editName = this.crisis.name;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('取消修改?');
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CrisisDetailComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: 'crisis-detail.component.html',
                    styles: ['input {width: 20em}', ':host {position: absolute;display: block;}'],
                    animations: [
                        trigger('routeAnimation', [
                            state('*', style({
                                opacity: 1,
                                transform: 'translateX(0)'
                            })),
                            transition(':enter', [
                                style({
                                    opacity: 0,
                                    transform: 'translateX(-100%)'
                                }),
                                animate('0.2s ease-in')
                            ]),
                            transition(':leave', [
                                animate('0.5s ease-out', style({
                                    opacity: 0,
                                    transform: 'translateY(100%)'
                                }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    CrisisDetailComponent.ctorParameters = [
        { type: ActivatedRoute, },
        { type: Router, },
        { type: DialogService, },
    ];
    CrisisDetailComponent.propDecorators = {
        'routeAnimation': [{ type: HostBinding, args: ['@routeAnimation',] },],
    };
    return CrisisDetailComponent;
}());
//# sourceMappingURL=crisis-detail.component.js.map