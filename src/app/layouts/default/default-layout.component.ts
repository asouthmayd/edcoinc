import { Component } from "@angular/core";
import { info_card_list } from 'src/app/content/info_card_list';
import { InfoCardModel } from 'src/app/content/info-card.model';

@Component({
    selector: 'edco-default-layout',
    templateUrl: 'default-layout.component.html',
    styleUrls: ['default-layout.component.css']
})

export class DefaultLayoutComponent{
    info_cards: InfoCardModel[] = [];
  
    constructor() {
      for (var info_card of info_card_list) {
        console.log(info_card);
        this.info_cards.push(info_card);
      }
    }
}