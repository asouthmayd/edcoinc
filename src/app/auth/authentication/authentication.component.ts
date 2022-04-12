import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'fm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private as: AuthenticationService) { }

  ngOnInit(): void {
  }

  authenticate(email: string, password: string) {
    console.log(email);
    console.log(password);
    console.log("authenticating");

    this.as.signUp(email, password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
