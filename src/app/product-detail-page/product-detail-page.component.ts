import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './product-detail-page.component.html',
    styleUrls: ['./product-detail-page.component.sass'],
    encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
export class ProductDetailPageComponent implements OnInit {

    detailInfo = {}
    blockInfo = {}

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.detailInfo = data.productDetailPageData.productDetail
        });
    }

}
