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

  constructor(public translationService: TranslationService) { } // Inject TranslationService
}
