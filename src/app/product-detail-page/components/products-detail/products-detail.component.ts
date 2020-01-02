import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-products-detail',
    templateUrl: './products-detail.component.html',
    styleUrls: ['./products-detail.component.sass']
})
export class ProductsDetailComponent implements OnInit {

    @Input() data: any
    largeImg:string

    constructor() {
    }

    ngOnInit() {
        this.largeImg = this.data.dtbProductImageList.edges[0].node.fileName
    }

    changeImg(currentImg) {
        this.largeImg = currentImg
    }

}
