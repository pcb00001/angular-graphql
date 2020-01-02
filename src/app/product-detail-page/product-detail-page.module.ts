import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailPageComponent} from './product-detail-page.component';
import {ProductDetailPageRoutingModule} from './product-detail-page-routing.module';
import {ProductsDetailComponent} from './components/products-detail/products-detail.component';
import {ProductsBlockComponent} from './components/products-block/products-block.component';
import {ProductsItemComponent} from './components/products-item/products-item.component';

@NgModule({
    declarations: [ProductDetailPageComponent, ProductsDetailComponent, ProductsBlockComponent, ProductsItemComponent],
    imports: [
        CommonModule,
        ProductDetailPageRoutingModule
    ],
    exports: [ProductDetailPageComponent]
})
export class ProductDetailPageModule {
}
