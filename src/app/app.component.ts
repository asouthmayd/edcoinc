import { Component } from '@angular/core';
import { info_card_list } from './content/info_card_list';
import { InfoCardModel } from './content/info-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edcoinc';

  info_cards: InfoCardModel[] = [];

  constructor() {
    for (var info_card of info_card_list) {
      console.log(info_card);
      this.info_cards.push(info_card);
    }
  }
}
