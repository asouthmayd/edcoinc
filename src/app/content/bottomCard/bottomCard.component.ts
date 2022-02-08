import { Component, Input } from "@angular/core";

@Component({
    selector: 'edco-bottomCard',
    templateUrl: 'bottomCard.component.html',
    styleUrls: ['bottomCard.component.css']
})

export class bottomCardComponent {
    @Input() icon: string;
    @Input() title_text: string;
    @Input() body_text: string;

    constructor(){
        this.icon ='glyphicon glyphicon-remove';
        this.title_text = "MISSING TEXT_TITLE";
        this.body_text = "MISSING TEXT_BODY";
    }
}