import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false // This makes the pipe re-evaluate when the language changes
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) { }

  transform(key: string, params?: { [key: string]: string | number }): string {
    return this.translationService.getTranslation(key, params);
  }
}

