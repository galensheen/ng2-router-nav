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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var crises_routes_module_1 = require('./crises-routes.module');
var crises_component_1 = require('./components/crises.component');
var crisis_detail_component_1 = require('./components/crisis-detail.component');
var crisis_detail_default_component_1 = require('./components/crisis-detail-default.component');
var crises_service_1 = require('./services/crises.service');
var CrisesModule = (function () {
    function CrisesModule() {
    }
    CrisesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                crises_routes_module_1.CrisesRoutesModule
            ],
            declarations: [
                crises_component_1.CrisesComponent,
                crisis_detail_component_1.CrisisDetailComponent,
                crisis_detail_default_component_1.CrisisDetailDefaultComponent
            ],
            providers: [
                crises_service_1.CrisesService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisesModule);
    return CrisesModule;
}());
exports.CrisesModule = CrisesModule;
//# sourceMappingURL=crises.module.js.map