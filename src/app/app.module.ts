import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navbarComponent } from 'src/app/header/navbar/navbar.component';
import { footerComponent } from 'src/app/footer/footer.component';
import { carouselSlidesComponent } from 'src/app/content/mainCarousel/mainCarousel.component';
import { bottomCardComponent } from 'src/app/content/bottomCard/bottomCard.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    footerComponent,
    carouselSlidesComponent,
    bottomCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
