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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dialog_service_1 = require('../../shared/services/dialog.service');
var HeroDetailComponent = (function () {
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
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "routeAnimation", null);
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'hero-detail.component.html',
            styles: [':host {display: block; position: absolute}'],
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition(':enter', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)  rotate(360deg)'
                        }),
                        core_1.animate('0.4s ease-in')
                    ]),
                    core_1.transition(':leave', core_1.animate('0.5s ease-out', core_1.style({ opacity: 0, transform: 'translateY(100%)' })))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService, router_1.ActivatedRoute, router_1.Router])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map