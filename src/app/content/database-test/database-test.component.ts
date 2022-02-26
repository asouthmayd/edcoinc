import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseTest } from './database-test.model';

@Component({
  selector: 'edco-database-test',
  templateUrl: './database-test.component.html',
  styleUrls: ['./database-test.component.css']
})
export class DatabaseTestComponent implements OnInit {
  myInfo: DatabaseTest | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending request to server");
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<DatabaseTest>('https://edco-90c55-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: DatabaseTest) => {
      console.log(data);
      this.myInfo = data;
    });
  }
}
