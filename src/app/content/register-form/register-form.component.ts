import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(public db: DatabaseService) { }

  ngOnInit(): void {

  }

  addUser(user: UserModel) {
    console.log("Adding User");
    console.log(user);
    this.db.addUser(user);
  }
}
