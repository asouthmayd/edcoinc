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
        this.icon ='glyphicon glyphicon-search icon-style';
        this.title_text = "Search By Keyword";
        this.body_text = "Search the entire website to find exactly what you are looking for.";
    }
}