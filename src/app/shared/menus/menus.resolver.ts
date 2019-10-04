import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve, RouterStateSnapshot,
} from '@angular/router';
import {MenusService} from './service/menus.service';

@Injectable({
    providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
    constructor(
        private menusService: MenusService,
    ) {
    }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<any> {
        return new Promise(async (resolvePromise, reject) => {
            await this.menusService.resolve().subscribe(
                res => {
                    resolvePromise(res.data);
                },
                error => {
                    reject(error);
                },
            );
        });

    }
}

