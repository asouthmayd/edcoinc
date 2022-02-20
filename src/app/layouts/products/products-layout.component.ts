import { Component } from "@angular/core";
import { ProductModel } from "src/app/content/product.model";
import { product_list } from "src/app/content/product_list";

@Component({
    selector: 'edco-products-layout',
    templateUrl: 'products-layout.component.html',
    styleUrls: ['products-layout.component.css']
})

export class ProductsLayoutComponent{
    products: ProductModel[] = [];
  
    constructor() {
      for (var product of product_list) {
        console.log(product);
        this.products.push(product);
      }
    }
}