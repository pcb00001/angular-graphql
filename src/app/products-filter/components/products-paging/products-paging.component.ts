import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-products-paging',
    templateUrl: './products-paging.component.html',
    styleUrls: ['./products-paging.component.sass']
})
export class ProductsPagingComponent implements OnInit {

    @Input() data: any

    constructor() {
    }

    ngOnInit() {
        console.log(this.data)
    }

}
