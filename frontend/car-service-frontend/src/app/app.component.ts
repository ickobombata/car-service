import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'avtorevolucija';
  isLoaded$: Observable<boolean>;

  constructor(
    private translationService: TranslationService
  ) {
    this.isLoaded$ = this.translationService.isLoaded$;
  }

  ngOnInit() {
  }
}
