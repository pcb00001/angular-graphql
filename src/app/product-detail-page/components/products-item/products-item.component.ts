import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.sass']
})
export class ProductsItemComponent implements OnInit {

  @Input() data: any

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
