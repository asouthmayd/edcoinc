import { Component } from "@angular/core";
import { ApplicationModel } from "src/app/content/application.model";
import { application_list } from "src/app/content/application_list";

@Component({
    selector: 'edco-applicationSolver-layout',
    templateUrl: 'applicationSolver-layout.component.html',
    styleUrls: ['applicationSolver-layout.component.css']
})

export class ApplicationSolverLayoutComponent {
    applications: ApplicationModel[] = [];
  
    constructor() {
      for (var application of application_list) {
        console.log(application);
        this.applications.push(application);
      }
    }
}