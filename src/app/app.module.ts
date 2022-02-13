import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navbarComponent } from 'src/app/header/navbar/navbar.component';
import { footerComponent } from 'src/app/footer/footer.component';
import { carouselSlidesComponent } from 'src/app/content/mainCarousel/mainCarousel.component';
import { bottomCardComponent } from 'src/app/content/bottomCard/bottomCard.component';

import { AppComponent } from './app.component';
import { AboutLayoutComponent } from './layouts/about/about-layout.component';
import { ApplicationSolverLayoutComponent } from './layouts/applicationSolver/applicationSolver-layout.component';
import { BuyEDCOLayoutComponent } from './layouts/buyEDCO/buyEDCO-layout.component';
import { CustomerSupportLayoutComponent } from './layouts/customerSupport/customerSupport-layout.component';
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import { ProductsLayoutComponent } from './layouts/products/products-layout.component';
import { TrainingLayoutComponent } from './layouts/training/training-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { registerLocaleData } from '@angular/common';
import { RegisterLayoutComponent } from './layouts/register/register-layout.component';
import { SearchLayoutComponent } from './layouts/search/search-layout.component';
import { PrivacyPolicyLayoutComponent } from './layouts/privacyPolicy/privacyPolicy-layout.component';

@NgModule({
  declarations: [
    /*-----Main App-----*/
    AppComponent,
    /*-----Layouts-----*/
    AboutLayoutComponent,
    ApplicationSolverLayoutComponent,
    BuyEDCOLayoutComponent,
    CustomerSupportLayoutComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,
    PrivacyPolicyLayoutComponent,
    ProductsLayoutComponent,
    RegisterLayoutComponent,
    SearchLayoutComponent,
    TrainingLayoutComponent,
    /*-----Components-----*/
    navbarComponent,
    footerComponent,
    carouselSlidesComponent,
    bottomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
