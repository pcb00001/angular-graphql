import {Component, Input, OnInit} from '@angular/core';
import {change_alias} from '../../../shared/helpers';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.sass']
})
export class ProductsItemComponent implements OnInit {

  @Input() data: any
  href:string

  constructor() { }

  ngOnInit() {
    const id = atob(this.data.node.productItem.id).split(':')[1]
    this.href = '/' + change_alias(this.data.node.productItem.name) + '/' + id
  }

}
