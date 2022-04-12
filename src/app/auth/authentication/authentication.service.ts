import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    baseUrl: string = "https:"//identifytoolkit.googleapis.com/v1/accounts";
    singUpEndPoint: string = "signUp";

    public constructor(private http: HttpClient) {

    }

    public signUp(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "requestSecureToken": true
        };

        return this.http.post(this.baseUrl+":"+this.singUpEndPoint+"?"+
        "key="+environment.firebase.apiKey, requestBody);
    }
}