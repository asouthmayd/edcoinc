import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navbarComponent } from 'src/app/header/navbar/navbar.component';
import { footerComponent } from 'src/app/footer/footer.component';
import { carouselSlidesComponent } from './content/carouselSlides/carouselSlides.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    footerComponent,
    carouselSlidesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
