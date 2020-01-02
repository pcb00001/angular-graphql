import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import * as graphqlProductsFilterApi from './products-filter.queries'

@Injectable({
    providedIn: 'root'
})
export class ProductsFilterService {

    constructor(
        private apollo: Apollo,
    ) {
    }

    public resolveAll(params: any) {
        return this.apollo
            .watchQuery<any>({
                query: graphqlProductsFilterApi.allProductsByCategoryId,
                variables: {categoryId: params.categoryId},
                fetchPolicy: 'no-cache',
            })
            .valueChanges;
    }


}
