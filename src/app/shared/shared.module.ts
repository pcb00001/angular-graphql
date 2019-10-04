import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ModalModule} from 'ngx-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {LayoutModule} from './layout';
import {AlertModule} from './alert';
import {HttpLoaderFactory} from './helpers';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {jaLocale} from 'ngx-bootstrap/locale';

defineLocale('en', jaLocale);

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        LayoutModule,
        AlertModule,
        ModalModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NgxPaginationModule,
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        LayoutModule,
        AlertModule,
        ModalModule,
        TranslateModule,
        NgxPaginationModule,
    ],
})
export class SharedModule {
}
