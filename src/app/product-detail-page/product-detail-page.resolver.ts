import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve, RouterStateSnapshot,
} from '@angular/router';
import {ProductDetailPageService} from './service/product-detail-page.service';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailPageResolver implements Resolve<any> {
    constructor(
        private productDetailPageService: ProductDetailPageService,
    ) {
    }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<any> {
        return new Promise(async (resolvePromise, reject) => {
            await this.productDetailPageService.resolve(route.params).subscribe(
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

