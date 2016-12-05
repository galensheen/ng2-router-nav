/**
 * Created by galen on 16/12/5.
 */

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {Crisis, CrisesService} from '../services/crises.service';

@Component({
    moduleId: module.id,
    templateUrl: 'crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;

    constructor(private crisesService: CrisesService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe((data: {crisis: Crisis}) => {
            this.crisis = data.crisis;
        });
    }

    gotoCrises() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
