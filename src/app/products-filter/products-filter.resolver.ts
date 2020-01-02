import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve, RouterStateSnapshot,
} from '@angular/router';
import {ProductsFilterService} from './service/products-filter.service';

@Injectable({
    providedIn: 'root'
})
export class ProductsFilterResolver implements Resolve<any> {
    constructor(
        private ProductsFilterService: ProductsFilterService,
    ) {
    }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<any> {
        return new Promise(async (resolvePromise, reject) => {
            await this.ProductsFilterService.resolveAll(route.params).subscribe(
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

