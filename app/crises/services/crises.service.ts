/**
 * Created by galen on 16/12/5.
 */

import {Injectable} from '@angular/core';


export class Crisis {
    constructor(public id: number, public name: string) {}
}

const CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisesService {

    getCrises() {
        return crisesPromise;
    }

    getCrisis(id: number | string) {
        return crisesPromise.then(crises => crises.find(crisis => crisis.id === +id));
    }
}
