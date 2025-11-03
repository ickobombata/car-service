import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Import RouterModule

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

function appInitializer(translationService: TranslationService) {
  return () => {
    const initialLang = localStorage.getItem('currentLanguage') || 'en-US';
    return translationService.loadTranslations(initialLang).toPromise();
  };
}

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
    HttpClientModule,
    RouterModule // Add RouterModule here
  ],
  providers: [
    TranslationService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [TranslationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
