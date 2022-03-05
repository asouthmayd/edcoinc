import { Component } from "@angular/core";
import { TrainingModel } from "src/app/models/training.model";
import { training_list } from "src/app/models/training_list";


@Component({
    selector: 'edco-training-layout',
    templateUrl: 'training-layout.component.html',
    styleUrls: ['training-layout.component.css']
})

export class TrainingLayoutComponent{
    trainings: TrainingModel[] = [];
  
    constructor() {
      for (var training of training_list) {
        console.log(training);
        this.trainings.push(training);
      }
    }
}