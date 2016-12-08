/**
 * Created by galen on 16/12/5.
 */
import 'rxjs/add/operator/switchMap';
import { Component, HostBinding, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '../../shared/services/dialog.service';
export var HeroDetailComponent = (function () {
    function HeroDetailComponent(dialogService, route, router) {
        this.dialogService = dialogService;
        this.route = route;
        this.router = router;
    }
    Object.defineProperty(HeroDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.hero = data.hero;
            _this.editName = _this.hero.name;
        });
    };
    HeroDetailComponent.prototype.save = function () {
        this.hero.name = this.editName;
        this.gotoHeroes();
    };
    HeroDetailComponent.prototype.cancel = function () {
        this.editName = this.hero.name;
        this.gotoHeroes();
    };
    HeroDetailComponent.prototype.canDeactivate = function () {
        if (!this.hero || this.hero.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('取消修改?');
    };
    HeroDetailComponent.prototype.gotoHeroes = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    HeroDetailComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: 'hero-detail.component.html',
                    styles: [':host {display: block; position: absolute}'],
                    animations: [
                        trigger('routeAnimation', [
                            state('*', style({
                                opacity: 1,
                                transform: 'translateX(0)'
                            })),
                            transition(':enter', [
                                style({
                                    opacity: 0,
                                    transform: 'translateX(-100%)  rotate(360deg)'
                                }),
                                animate('0.4s ease-in')
                            ]),
                            transition(':leave', animate('0.5s ease-out', style({ opacity: 0, transform: 'translateY(100%)' })))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    HeroDetailComponent.ctorParameters = [
        { type: DialogService, },
        { type: ActivatedRoute, },
        { type: Router, },
    ];
    HeroDetailComponent.propDecorators = {
        'routeAnimation': [{ type: HostBinding, args: ['@routeAnimation',] },],
    };
    return HeroDetailComponent;
}());
//# sourceMappingURL=hero-detail.component.js.map