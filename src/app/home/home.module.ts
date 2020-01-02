import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ProductsItemComponent} from './components/products-item/products-item.component';
import {ProductsBlockComponent} from './components/products-block/products-block.component';

@NgModule({
    declarations: [HomeComponent, ProductsItemComponent, ProductsBlockComponent],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [HomeComponent]
})
export class HomeModule {
}
