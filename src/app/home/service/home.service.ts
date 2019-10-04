import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import * as graphqlHomeApi from './home.queries'

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(
        private apollo: Apollo,
    ) { }

    public resolve() {
        return this.apollo
            .watchQuery<any>({
                query: graphqlHomeApi.homeData,
                fetchPolicy: 'no-cache',
            })
            .valueChanges;
    }
}
