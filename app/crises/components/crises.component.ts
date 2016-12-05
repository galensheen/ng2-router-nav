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
    templateUrl: 'crises.component.html'
})
export class CrisesComponent implements OnInit {

    crises: Observable<Crisis[]>;

    constructor(private route: ActivatedRoute, private router: Router, private crisesService: CrisesService) {}

    ngOnInit() {
        this.crises = this.route.params.switchMap((params: Params) => {
            return this.crisesService.getCrises();
        });
    }

    onSelect(crisis) {
        this.router.navigate([crisis.id], {relativeTo: this.route});
    }
}
