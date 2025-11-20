import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider'; // Import MatSliderModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

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
import { TranslatePipe } from './shared/translate.pipe';
import { TranslationService } from './services/translation.service';

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
    CarDetailComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    HttpClientModule,
    MatSliderModule, // Add MatSliderModule here
    BrowserAnimationsModule // Add BrowserAnimationsModule here
  ],
  providers: [
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
