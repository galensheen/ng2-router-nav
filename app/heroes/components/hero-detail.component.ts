/**
 * Created by galen on 16/12/5.
 */

import 'rxjs/add/operator/switchMap';

import {Component, OnInit, HostBinding, trigger, state, style, transition, animate, group} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Hero} from '../services/heroes.service';
import {DialogService} from '../../shared/services/dialog.service';

@Component({
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
            transition(':leave', animate('0.5s ease-out', style({opacity: 0, transform: 'translateY(100%)'})))
        ])
    ]
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

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
