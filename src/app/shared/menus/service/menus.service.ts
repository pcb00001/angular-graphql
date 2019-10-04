import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import * as graphqlMenusApi from './menus.queries'

@Injectable({
    providedIn: 'root'
})
export class MenusService {

    constructor(
        private apollo: Apollo,
    ) { }

    public resolve() {
        return this.apollo
            .watchQuery<any>({
                query: graphqlMenusApi.data,
                fetchPolicy: 'no-cache',
            })
            .valueChanges;
    }
}
