/**
 * Created by galen on 16/12/5.
 */

import 'rxjs/add/operator/switchMap';

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Hero, HeroesService} from './heroes.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(private heroesService: HeroesService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.heroesService.getHero(+params['id']))
            .subscribe((hero: Hero) => this.hero = hero);
    }

    gotoHeroes() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
