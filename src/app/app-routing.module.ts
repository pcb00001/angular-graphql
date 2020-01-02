import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'trang-chu',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: ':productAlias',
        loadChildren: () => import('./product-detail-page/product-detail-page.module').then(m => m.ProductDetailPageModule),
    },
    {
        path: 'danh-sach/:categoryAlias',
        loadChildren: () => import('./products-filter/products-filter.module').then(m => m.ProductsFilterModule),
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
