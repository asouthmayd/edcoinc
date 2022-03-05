import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/content/database/database.service";
import { ProductModel } from "src/app/models/product.model";



@Component({
    selector: 'edco-products-layout',
    templateUrl: 'products-layout.component.html',
    styleUrls: ['products-layout.component.css']
})

export class ProductsLayoutComponent implements OnInit{
    products: ProductModel[] = [];
  
    constructor(private databaseService: DatabaseService) {

    }

    ngOnInit(): void {
        this.databaseService.getProducts().subscribe(data => {
          console.log("Fetching product data");
          for (var product of data) {
            console.log(product);
            this.products.push(product);
          }
        })
    }
}