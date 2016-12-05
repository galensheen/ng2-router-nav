/**
 * Created by galen on 16/12/5.
 */

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Hero, HeroesService} from './heroes.service';

@Component({
    moduleId: module.id,
    templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Observable<Hero[]>;

    constructor(private heroesService: HeroesService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.heroes = this.route.params.switchMap((params: Params) => {
            return this.heroesService.getHeroes();
        });
    }

    onSelect(hero) {
        this.router.navigate([hero.id], {relativeTo: this.route});
    }
}
