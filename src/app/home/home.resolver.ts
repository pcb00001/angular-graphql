import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve, RouterStateSnapshot,
} from '@angular/router';
import {HomeService} from './service/home.service';

@Injectable({
    providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
    constructor(
        private homeService: HomeService,
    ) {
    }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<any> {
        return new Promise(async (resolvePromise, reject) => {
            await this.homeService.resolve().subscribe(
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

