import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { environment } from '../config';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent {
  showCars = environment.showCars;
  isMenuOpen = false;

  constructor(public translationService: TranslationService) { } // Inject TranslationService

  getLogoPath(): string {
    const currentLang = this.translationService.getCurrentLanguage();
    return currentLang === 'en-US' ? 'assets/logo-en.png' : 'assets/logo-transperent-small.png';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
