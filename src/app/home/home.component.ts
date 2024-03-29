import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
export class HomeComponent implements OnInit {

    homeDataSpBanChay = {}
    homeDataSpMoi = {}

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.homeDataSpBanChay = data.homeData.spBanChay
            this.homeDataSpMoi = data.homeData.spMoi
        });
    }

}
