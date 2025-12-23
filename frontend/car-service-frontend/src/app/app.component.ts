import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'avtorevolucija';

  constructor(
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    // The TranslationService now handles initial language loading from local storage
    // based on this.translationService.getCurrentLanguage()
  }
}
