import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductsFilterService} from './service/products-filter.service';

@Component({
    selector: 'app-products-filter',
    templateUrl: './products-filter.component.html',
    styleUrls: ['./products-filter.component.sass'],
})
export class ProductsFilterComponent implements OnInit {

    productByTrademark = {}
    productsFilterData = []
    pagingInfo = []
    orderFlag = ''
    tags = {}
    filterTags = []

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ProductsFilterService: ProductsFilterService,
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.getTags(data.ProductsFilterData.productList)
            this.classifyProductsByTrademark(data.ProductsFilterData.productList)
            this.populateData(this.filterByTrademark(),
                Math.ceil(data.ProductsFilterData.productList.length / 8));
        });
    }

    filterByTrademark() {
        if(!this.hasTrademarkFilter()) return this.productByTrademark
        let productListByTrademark = {}
        this.filterTags.forEach((tag) => {
            if(typeof this.productByTrademark[tag] !== 'undefined') {
                productListByTrademark[tag] = this.productByTrademark[tag]
            }
        })
        console.log('productList', productListByTrademark)
        return productListByTrademark
    }

    hasTrademarkFilter() {
        let has = false
        this.filterTags.forEach((tag) => {
            if(tag.indexOf('Thương hiệu') != -1) {
                has = true
            }
        })
        return has
    }

    classifyProductsByTrademark(productList) {
        this.productByTrademark = {};
        productList.forEach((element) => {
            let tags = element.dtbProductTagList.edges
            tags.forEach((tagEdgeItem) => {
                let tag = tagEdgeItem.node.ModelDtbTag.name
                let [group, value] = tag.split(':')
                if (group == 'Thương hiệu' && typeof this.productByTrademark[tag] === 'undefined') {
                    this.productByTrademark[tag] = []
                    this.productByTrademark[tag].push(element);
                }
            });
        });
        console.log('productByTrademark', this.productByTrademark)
    }

    orderDesc() {

        return new Promise(async (resolvePromise, reject) => {
            await this.ProductsFilterService.resolveAll(this.route.snapshot.params).subscribe(
                res => {
                    this.orderFlag = 'des'
                    this.getTags(res.data.productList)
                    this.classifyProductsByTrademark(this.sort(res.data.productList).reverse())
                    this.populateData(this.filterByTrademark(),
                        Math.ceil(res.data.productList.length / 8));
                },
                error => {
                    this.orderFlag = 'asc'
                    reject(error);
                },
            );
        });
    }

    orderAsc() {
        return new Promise(async (resolvePromise, reject) => {
            await this.ProductsFilterService.resolveAll(this.route.snapshot.params).subscribe(
                res => {
                    this.orderFlag = 'asc'
                    this.getTags(res.data.productList)
                    this.classifyProductsByTrademark(res.data.productList)
                    this.populateData(this.filterByTrademark(),
                        Math.ceil(res.data.productList.length / 8));
                },
                error => {
                    this.orderFlag = 'des'
                    reject(error);
                },
            );
        });
    }

    sort(array) {
        return array.filter((element, index) => {
            if (index === 0) return true
            let price1 = parseInt(element.dtbProductClassList.edges[0].node.price02)
            let price2 = parseInt(array[index - 1].dtbProductClassList.edges[0].node.price02)
            let isFilter = price2 - price1
            return isFilter;
        });
    }

    getTags(productList): any {
        this.tags = {}
        productList.forEach((element) => {
            let tags = element.dtbProductTagList.edges
            tags.forEach((tagEdgeItem) => {
                let tag = tagEdgeItem.node.ModelDtbTag.name
                let [group, value] = tag.split(':');
                if (typeof value !== 'undefined') {
                    if (typeof this.tags[group] === 'undefined') {
                        this.tags[group] = [value]
                    } else if (this.tags[group].indexOf(value) == -1) {
                        this.tags[group].push(value)
                    }
                }
            });
        });

        console.log('tags', this.tags)
    }

    getLimit(array) {
        let limit = 8;
        if (array.length < limit) return array

        let offset = (this.route.snapshot.params.currentPage > 1) ? ((this.route.snapshot.params.currentPage - 1) * limit) : 0;
        return array.filter((element, index) => {
            return index > offset && (index - offset) <= limit;
        });
    }

    filterAction(group, tag) {
        let filterTag = `${group}:${tag}`;
        if (this.filterTags.indexOf(filterTag) == -1) {
            this.filterTags.push(filterTag)
        } else {
            this.filterTags.splice(this.filterTags.indexOf(filterTag), 1)
        }
        this.orderFlag == 'des' ? this.orderDesc() : this.orderAsc()
        console.log('filterTags', this.filterTags)
    }

    populateData(productListByTrademark, totalPages) {

        this.pagingInfo = []
        this.productsFilterData = [];
        for (let key in productListByTrademark){
            if(productListByTrademark.hasOwnProperty(key)){
                if (this.filterTags.length == 0) {
                    this.productsFilterData = (this.productsFilterData.concat(productListByTrademark[key]))
                } else {
                    productListByTrademark[key].forEach((product) => {
                        let tags = product.dtbProductTagList.edges
                        let isExistFilter = true
                        let productTags = [];
                        for (let i = 0; i < tags.length; i++) {
                            if(tags[i].node.ModelDtbTag.name.indexOf('Thương hiệu') == -1) {
                                productTags.push(tags[i].node.ModelDtbTag.name)
                            }
                        }
                        this.filterTags.forEach((filterTag) => {
                            if (filterTag.indexOf('Thương hiệu') == -1 && productTags.indexOf(filterTag) == -1) {
                                isExistFilter = false
                            }
                        })
                        if (isExistFilter) {
                            this.productsFilterData.push(product)
                        }
                    })
                }
            }
        }

        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                let info = {pageIndex: i, routerLink: '', isActive: false}
                if (this.route.snapshot.params['currentPage'] == i) {
                    info.isActive = true
                }
                info.routerLink = '/danh-sach/' + this.route.snapshot.params['categoryAlias'] + '/' + this.route.snapshot.params['categoryId'] + '/' + i
                this.pagingInfo.push(info)
            }
        }
    }


}
