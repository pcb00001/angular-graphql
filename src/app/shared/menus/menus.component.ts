import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {MenusService} from './service/menus.service';

@Component({
    selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.sass']
})
export class MenusComponent implements OnInit {

    constructor(
        private menusService: MenusService,
    ) {
    }


    ngOnInit() {
        this.menusService.resolve().subscribe(
            res => {
                console.log(res.data);
            },
            error => {
                console.log(error);
            },
        );
    }

}
