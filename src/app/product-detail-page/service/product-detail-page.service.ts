import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import * as graphqlProductDetailPageApi from './product-detail-page.queries'

@Injectable({
    providedIn: 'root'
})
export class ProductDetailPageService {

    constructor(
        private apollo: Apollo,
    ) { }

    public resolve(params: any) {
        return this.apollo
            .watchQuery<any>({
                query: graphqlProductDetailPageApi.productDetailPageData,
                variables: {id: params.productId},
                fetchPolicy: 'no-cache',
            })
            .valueChanges;
    }
}
