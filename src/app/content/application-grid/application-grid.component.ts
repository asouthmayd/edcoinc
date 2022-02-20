import { Component} from '@angular/core';
import { ApplicationModel } from '../application.model';
import { application_list } from '../application_list';

@Component({
  selector: 'edco-application-grid',
  templateUrl: './application-grid.component.html',
  styleUrls: ['./application-grid.component.css']
})
export class ApplicationGridComponent{

  applications: ApplicationModel[] = [];
  
  constructor() {
    for (var application of application_list) {
      console.log(application);
      this.applications.push(application);
    }
  }

}
