import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-service-frontend';

  constructor(
    private activatedRoute: ActivatedRoute,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const lang = params.get('lang') || 'en-US'; // Default to English
      this.translationService.loadTranslations(lang).subscribe();
    });
  }
}
