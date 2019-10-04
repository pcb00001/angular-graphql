import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {CollapseModule} from 'ngx-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HttpLoaderFactory} from '../helpers';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenusModule} from '../menus/menus.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        MenusModule
    ],
    exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class LayoutModule {
}
