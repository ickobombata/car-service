import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public translationService: TranslationService) { } // Inject TranslationService
}
