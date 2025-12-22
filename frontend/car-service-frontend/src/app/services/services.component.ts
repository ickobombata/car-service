import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { environment } from '../config';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  showCars = environment.showCars;

  constructor(public translationService: TranslationService) { } // Inject TranslationService
}
