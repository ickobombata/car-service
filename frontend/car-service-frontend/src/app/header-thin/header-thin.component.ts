import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header-thin',
  templateUrl: './header-thin.component.html',
  styleUrls: ['./header-thin.component.css']
})
export class HeaderThinComponent implements OnInit {
  dropdownOpen = false;
  currentLang: string = 'en-US';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.translationService.currentLanguage$.subscribe(lang => {
        this.currentLang = lang;
      });
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLanguage(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('changeLanguage called with lang:', lang);
      let fullLangCode = '';
      if (lang === 'en') {
        fullLangCode = 'en-US';
      } else if (lang === 'si') {
        fullLangCode = 'si-SI';
      } else {
        fullLangCode = lang; // Fallback for other languages if any
      }
      this.translationService.setLanguagePreference(fullLangCode);
      window.location.reload();
    }
  }
} 
