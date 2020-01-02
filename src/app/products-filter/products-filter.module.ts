import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsFilterComponent} from './products-filter.component';
import {ProductsFilterRoutingModule} from './products-filter-routing.module';
import {ProductsFilterItemComponent} from './components/products-item/products-filter-item.component';
import {ProductsFilterBlockComponent} from './components/products-block/products-filter-block.component';
import {ProductsPagingComponent} from './components/products-paging/products-paging.component';

@NgModule({
    declarations: [ProductsFilterComponent, ProductsFilterItemComponent, ProductsFilterBlockComponent, ProductsPagingComponent],
    imports: [
        CommonModule,
        ProductsFilterRoutingModule
    ],
    exports: [ProductsFilterComponent]
})
export class ProductsFilterModule {
}
