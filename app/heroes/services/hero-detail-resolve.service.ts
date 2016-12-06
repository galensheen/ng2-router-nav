/**
 * Created by galen on 16/12/6.
 */

import {Injectable} from '@angular/core';

import {Router, ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Hero, HeroesService} from './heroes.service';

@Injectable()
export class HeroDetailResolveService implements Resolve<Hero> {

    constructor(private router: Router, private heroesService: HeroesService) {}

    resolve(route: ActivatedRouteSnapshot): boolean | Promise<Hero> {
        let id = route.params['id'];
        return this.heroesService.getHero(id).then(hero => {
            if (!hero) {
                this.router.navigate(['/heroes']);
                return false;
            }
            return hero;
        });
    }
}
