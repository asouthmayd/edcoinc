import { Component } from "@angular/core";
import { DatabaseService } from "src/app/content/database/database.service";
import { InfoCardModel } from "src/app/models/info-card.model";


@Component({
    selector: 'edco-default-layout',
    templateUrl: 'default-layout.component.html',
    styleUrls: ['default-layout.component.css']
})

export class DefaultLayoutComponent{
  infoCards: InfoCardModel[] = [];
  
  constructor(private databaseService: DatabaseService) {

  }

  ngOnInit(): void {
      this.databaseService.getInfoCard().subscribe(data => {
        console.log("Fetching infoCard data");
        for (var infoCard of data) {
          console.log(infoCard);
          this.infoCards.push(infoCard);
        }
      })
  }
}