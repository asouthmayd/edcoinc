import { Component, Input } from "@angular/core";


@Component({

    selector: 'edco-applicationCard',
    templateUrl: 'applicationCard.component.html',
    styleUrls: ['applicationCard.component.css']

})

export class ApplicationCardComponent {
    @Input() application_name: string;
    @Input() application_img: string;
    @Input() application_route: string;

    constructor(){
        this.application_name ="MISSING application NAME";
        this.application_img= "glyphicon glyphicon-remove";
        this.application_route = "";
    }
}