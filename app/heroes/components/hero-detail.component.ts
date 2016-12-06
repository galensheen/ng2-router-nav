/**
 * Created by galen on 16/12/5.
 */

import 'rxjs/add/operator/switchMap';

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Hero, HeroesService} from '../services/heroes.service';
import {DialogService} from '../../shared/services/dialog.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;
    editName: string;

    constructor(private dialogService: DialogService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe((data: {hero: Hero}) => {
            this.hero = data.hero;
            this.editName = this.hero.name;
        });
    }

    save() {
        this.hero.name = this.editName;
        this.gotoHeroes();
    }

    cancel() {
        this.editName = this.hero.name;
        this.gotoHeroes();
    }

    canDeactivate(): Promise<boolean> | boolean {
        if (!this.hero || this.hero.name === this.editName) {
            return true;
        }

        return this.dialogService.confirm('取消修改?');
    }

    gotoHeroes() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
