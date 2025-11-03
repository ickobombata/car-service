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
  currentLanguage: string = 'en'; // Default to 'en'

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.activatedRoute.queryParamMap.subscribe(params => {
        this.currentLanguage = params.get('lang') || 'en';
        this.translationService.setCurrentLanguage(this.currentLanguage);
      });
      this.translationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      });
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLanguage(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { lang: lang === 'en' ? null : lang }, // Set lang query param, remove for en
        queryParamsHandling: 'merge'
      });
      this.translationService.loadTranslations(lang).subscribe();
    }
    this.dropdownOpen = false;
  }
}
