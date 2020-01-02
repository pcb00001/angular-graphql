import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-products-block',
    templateUrl: './products-block.component.html',
    styleUrls: ['./products-block.component.sass']
})
export class ProductsBlockComponent implements OnInit {

    @Input() data: any

    constructor() {
    }

    ngOnInit() {
        console.log(this.data)
    }

}
