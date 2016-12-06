/**
 * Created by galen on 16/12/5.
 */

import 'rxjs/add/operator/switchMap';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Crisis} from '../services/crises.service';
import {DialogService} from '../../shared/services/dialog.service';

@Component({
    moduleId: module.id,
    templateUrl: 'crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {

    crisis: Crisis;
    editName: string;

    constructor(private route: ActivatedRoute, private router: Router, private dialogService: DialogService) {}

    ngOnInit() {
        this.route.data.subscribe((data: {crisis: Crisis}) => {
            this.crisis = data.crisis;
            this.editName = this.crisis.name;
        });
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    cancel() {
        this.editName = this.crisis.name;
        this.gotoCrises();
    }

    canDeactivate(): Promise<boolean> | boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('取消修改?');
    }

    gotoCrises() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
