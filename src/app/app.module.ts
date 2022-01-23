import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { mainNavBarComponent } from 'src/navigation/mainNavBar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    mainNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
