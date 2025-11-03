import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private _currentLanguage = new BehaviorSubject<string>('en'); // Default to 'en'
  public readonly currentLanguage$ = this._currentLanguage.asObservable();

  constructor(private http: HttpClient) { }

  public loadTranslations(lang: string): Observable<any> {
    const fileLang = lang.split('-')[0]; // Use 'en' for 'en-US', 'si' for 'si-SI'
    return this.http.get(`./assets/i18n/${fileLang}.json`).pipe(
      tap(data => {
        this.translations = data;
        this._currentLanguage.next(lang);
      })
    );
  }

  public getTranslation(key: string, params?: { [key: string]: string | number }): string {
    let translatedText = this.translations[key] || key;

    if (params) {
      for (const paramKey in params) {
        if (params.hasOwnProperty(paramKey)) {
          const value = params[paramKey];
          translatedText = translatedText.replace(new RegExp(`{${paramKey}}`, 'g'), String(value));
        }
      }
    }
    return translatedText;
  }

  public setCurrentLanguage(lang: string) {
    this._currentLanguage.next(lang);
  }

  public getCurrentLanguage(): string {
    return this._currentLanguage.value;
  }
}
