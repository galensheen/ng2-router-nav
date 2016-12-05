/**
 * Created by galen on 16/12/6.
 */

import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {Crisis, CrisesService} from './crises.service';

@Injectable()
export class CrisisDetailResolveService implements Resolve<Crisis> {

    constructor(private crisesService: CrisesService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): boolean | Promise<Crisis> {
        let id = route.params['id'];
        return this.crisesService.getCrisis(id).then(crisis => {
            if (!crisis) {
               this.router.navigate(['/crises']);
               return false;
            }

            return crisis;
        });
    }
}
