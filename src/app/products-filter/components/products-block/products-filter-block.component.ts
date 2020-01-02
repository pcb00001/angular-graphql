import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-products-filter-block',
    templateUrl: './products-filter-block.component.html',
    styleUrls: ['./products-filter-block.component.sass']
})
export class ProductsFilterBlockComponent implements OnInit {

    @Input() data: any

    constructor() {
    }

    ngOnInit() {
        console.log(this.data)
    }

}
