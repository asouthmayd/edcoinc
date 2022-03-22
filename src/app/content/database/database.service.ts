import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Inject, Injectable } from "@angular/core";
import { ApplicationModel } from "src/app/models/application.model";
import { InfoCardModel } from "src/app/models/info-card.model";
import { ProductModel } from "src/app/models/product.model";



@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    private databaseRoot:string = "https://edco-90c55-default-rtdb.firebaseio.com/";

    private productExtension: string = "products.json";
    private applicationExtension: string = "applications.json";
    private infoCardExtension: string = "info-card.json";

    constructor(private db:AngularFireDatabase){

    }

    public getProducts(){
        return this.db.list<ProductModel>("products").valueChanges();
    }

    public getApplications(){
        return this.db.list<ApplicationModel>("applications").valueChanges();
    }

    public getInfoCard(){
        return this.db.list<InfoCardModel>("info-card").valueChanges();
    }
}