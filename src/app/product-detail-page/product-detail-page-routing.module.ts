import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailPageResolver} from './product-detail-page.resolver';
import {ProductDetailPageComponent} from './product-detail-page.component';

const routes: Routes = [
    {path: ':productId', component: ProductDetailPageComponent, resolve: {productDetailPageData: ProductDetailPageResolver}},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ProductDetailPageResolver
    ]
})
export class ProductDetailPageRoutingModule {
}
