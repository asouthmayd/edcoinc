import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { headerComponent } from 'src/app/header/header.component';
import { footerComponent } from 'src/app/footer/footer.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
