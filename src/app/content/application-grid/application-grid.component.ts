import { Component} from '@angular/core';
import { ApplicationModel } from 'src/app/models/application.model';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'edco-application-grid',
  templateUrl: './application-grid.component.html',
  styleUrls: ['./application-grid.component.css']
})
export class ApplicationGridComponent{
  applications: ApplicationModel[] = [];
  
  constructor(private databaseService: DatabaseService) {

  }

  ngOnInit(): void {
      this.databaseService.getApplications().subscribe(data => {
        console.log("Fetching application data");
        for (var application of data) {
          console.log(application);
          this.applications.push(application);
        }
      })
  }

}
