import { Component, Input } from "@angular/core";


@Component({

    selector: 'edco-trainingCard',
    templateUrl: 'trainingCard.component.html',
    styleUrls: ['trainingCard.component.css']

})

export class TrainingCardComponent {
    @Input() training_name: string;
    @Input() training_img: string;
    @Input() training_route: string;

    constructor(){
        this.training_name ="MISSING training NAME";
        this.training_img= "glyphicon glyphicon-remove";
        this.training_route = "";
    }
}
