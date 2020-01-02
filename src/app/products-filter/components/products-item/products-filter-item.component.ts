import {Component, Input, OnInit} from '@angular/core';
import {change_alias} from '../../../shared/helpers';

@Component({
  selector: 'app-products-filter-item',
  templateUrl: './products-filter-item.component.html',
  styleUrls: ['./products-filter-item.component.sass']
})
export class ProductsFilterItemComponent implements OnInit {

  @Input() data: any
  href:string

  constructor() { }

  ngOnInit() {
    const id = atob(this.data.id).split(':')[1]
    this.href = '/' + change_alias(this.data.name) + '/' + id
  }

}
