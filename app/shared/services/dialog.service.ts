/**
 * Created by galen on 16/12/6.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class DialogService {
    confirm(message?: string) {
        return new Promise<boolean>(resolve => {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
}
