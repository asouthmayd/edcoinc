import { identifierName } from "@angular/compiler";

export class MyInfoModel {

    FirstName: string;
    Lastname: string;
    GitHub: string;
    mix_id: string;

    constructor(FirstName: string, Lastname: string, GitHub: string, mix_id: string) {
        this.FirstName = "";
        this.Lastname = "";
        this.GitHub = "";
        this.mix_id = "";
    }
}