import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsFilterResolver} from './products-filter.resolver';
import {ProductsFilterComponent} from './products-filter.component';

const routes: Routes = [
    {path: ':categoryId/:currentPage', component: ProductsFilterComponent, resolve: {ProductsFilterData: ProductsFilterResolver}},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ProductsFilterResolver
    ]
})
export class ProductsFilterRoutingModule {
}
