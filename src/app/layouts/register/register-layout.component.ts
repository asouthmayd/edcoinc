import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/user.model";
import { DatabaseService } from "src/app/content/database/database.service";

@Component({
    selector: 'edco-register-layout',
    templateUrl: 'register-layout.component.html',
    styleUrls: ['register-layout.component.css']
})

export class RegisterLayoutComponent implements OnInit {

    constructor(public db: DatabaseService) { }

    ngOnInit(): void {

    }

    addUser(user: UserModel) {
        console.log("Adding User");
        console.log(user);
        this.db.addUser(user);
    }

}