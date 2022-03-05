import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ApplicationModel } from "src/app/models/application.model";
import { InfoCardModel } from "src/app/models/info-card.model";
import { MyInfoModel } from "src/app/models/my-info.model";
import { ProductModel } from "src/app/models/product.model";



@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    private databaseRoot:string = "https://edco-90c55-default-rtdb.firebaseio.com/";

    private productExtension: string = "products.json";
    private applicationExtension: string = "applications.json";
    private infoCardExtension: string = "info-card.json";

    constructor(private http:HttpClient){

    }

    public getProducts(){
        return this.http.get<ProductModel []>(this.databaseRoot + this.productExtension);
    }

    public getApplications(){
        return this.http.get<ApplicationModel []>(this.databaseRoot + this.applicationExtension);
    }

    public getInfoCard(){
        return this.http.get<InfoCardModel []>(this.databaseRoot + this.infoCardExtension);
    }
}