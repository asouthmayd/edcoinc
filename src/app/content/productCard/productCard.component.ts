import { Component, Input } from "@angular/core";


@Component({

    selector: 'edco-productCard',
    templateUrl: 'productCard.component.html',
    styleUrls: ['productCard.component.css']

})

export class ProductCardComponent {
    @Input() product_name: string;
    @Input() product_img: string;
    @Input() product_route: string;

    constructor(){
        this.product_name ="MISSING PRODUCT NAME";
        this.product_img= "glyphicon glyphicon-remove";
        this.product_route = "";
    }
}