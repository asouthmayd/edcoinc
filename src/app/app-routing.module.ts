import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import { AboutLayoutComponent } from './layouts/about/about-layout.component';
import { ProductsLayoutComponent } from './layouts/products/products-layout.component';
import { CustomerSupportLayoutComponent } from './layouts/customerSupport/customerSupport-layout.component';
import { BuyEDCOLayoutComponent } from './layouts/buyEDCO/buyEDCO-layout.component';
import { TrainingLayoutComponent } from './layouts/training/training-layout.component';
import { ApplicationSolverLayoutComponent } from './layouts/applicationSolver/applicationSolver-layout.component';
import { SearchLayoutComponent } from './layouts/search/search-layout.component';
import { LoginLayoutComponent } from './layouts/login/login-layout.component';
import { RegisterLayoutComponent } from './layouts/register/register-layout.component';
import { PrivacyPolicyLayoutComponent } from './layouts/privacyPolicy/privacyPolicy-layout.component';

const routes: Routes = [

  { path: '', component: DefaultLayoutComponent },
  { path: 'about-us', component: AboutLayoutComponent },
  { path: 'products', component: ProductsLayoutComponent },
  { path: 'customer-support', component: CustomerSupportLayoutComponent },
  { path: 'where-to-buy', component: BuyEDCOLayoutComponent },
  { path: 'training', component: TrainingLayoutComponent },
  { path: 'application-guide', component: ApplicationSolverLayoutComponent },
  { path: 'keyword-search', component: SearchLayoutComponent },
  { path: 'login', component: LoginLayoutComponent },
  { path: 'register', component: RegisterLayoutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyLayoutComponent }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
