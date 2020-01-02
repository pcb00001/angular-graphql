import {Component, OnInit, Input} from '@angular/core';
import {MenusService} from './service/menus.service';
import {change_alias} from '../helpers';

@Component({
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.sass']
})
export class MenusComponent implements OnInit {

    menuData = [];

    constructor(
        private menusService: MenusService,
    ) {
    }

    ngOnInit() {
        this.menusService.resolve().subscribe(
            res => {
                this.menuData = res.data.menusData.menusGroup.edges;
            },
            error => {
                console.log(error);
            },
        );
    }

    getLink(name, id) {
       return change_alias(name) + '/' + atob(id).split(':')[1]
    }

}
