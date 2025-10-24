import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderThinComponent } from './header-thin/header-thin.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderThinComponent,
    HeaderNavigationComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    CarsComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
