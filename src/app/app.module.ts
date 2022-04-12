import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

/*-----Header & Footer-----*/
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';

/*-----Layouts-----*/
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

/*-----Components-----*/
import { carouselSlidesComponent } from 'src/app/content/mainCarousel/mainCarousel.component';
import { bottomCardComponent } from 'src/app/content/bottomCard/bottomCard.component';
import { ProductCardComponent } from './content/productCard/productCard.component';
import { TrainingCardComponent } from './content/trainingCard/trainingCard.component';
import { ApplicationCardComponent } from './content/applicationCard/applicationCard.component';
import { TitleBarComponent } from './content/title-bar/title-bar.component';
import { BigRedButtonComponent } from './content/big-red-button/big-red-button.component';
import { ApplicationSolverSidebarComponent } from './content/application-solver-sidebar/application-solver-sidebar.component';
import { ApplicationGridComponent } from './content/application-grid/application-grid.component';
import { BuyEdcoBannerComponent } from './content/buy-edco-banner/buy-edco-banner.component';
import { DatabaseTestComponent } from './content/database-test/database-test.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RegisterFormComponent } from './content/register-form/register-form.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


@NgModule({
  declarations: [
    /*-----Main App-----*/
    AppComponent,
    /*-----Header & Footer-----*/
    HeaderComponent,
    FooterComponent,
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
    carouselSlidesComponent,
    bottomCardComponent,
    ProductCardComponent,
    TrainingCardComponent,
    ApplicationCardComponent,
    TitleBarComponent,
    BigRedButtonComponent,
    ApplicationSolverSidebarComponent,
    ApplicationGridComponent,
    BuyEdcoBannerComponent,
    DatabaseTestComponent,
    RegisterFormComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
