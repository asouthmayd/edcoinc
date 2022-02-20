import { Component, Input } from '@angular/core';

@Component({
  selector: 'edco-title-bar',
  templateUrl: 'title-bar.component.html',
  styleUrls: ['title-bar.component.css']
})
export class TitleBarComponent {
  @Input() title_text: string;
  @Input() button_route: string;

  constructor() {
    this.title_text = "MISSING TEXT";
    this.button_route = "";
  }
}
