import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CollapseModule} from 'ngx-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared';
import {NotFoundModule} from './shared/not-found';
import {GlobalErrorHandlerService} from './shared/services';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        HttpClientModule, // provides HttpClient for HttpLink
        ApolloModule,
        HttpLinkModule,
        NotFoundModule,
    ],
    providers: [
        {provide: ErrorHandler, useClass: GlobalErrorHandlerService},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            // By default, this client will send queries to the
            // `/graphql` endpoint on the same host
            link: httpLink.create({uri: `${environment.apiUrl}/graphql`}),
            cache: new InMemoryCache(),
        });
    }
}
