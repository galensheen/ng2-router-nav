/**
 * Created by galen on 16/12/6.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PreloadSelectedModules} from '../core/selective-preload-strategy';

import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    templateUrl: 'admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {

    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(private route: ActivatedRoute, private preloadStrategy: PreloadSelectedModules) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        this.sessionId = this.route.queryParams.map(params => params['session_id'] || 'None');
        this.token = this.route.fragment.map(fragment => fragment || 'None');
    }
}