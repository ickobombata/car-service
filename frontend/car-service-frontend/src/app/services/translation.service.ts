import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../config';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private defaultLanguage = environment.production ? 'si-SI' : 'en-US';
  private _currentLanguage = new BehaviorSubject<string>(this.defaultLanguage);
  public readonly currentLanguage$ = this._currentLanguage.asObservable();

  constructor(private http: HttpClient) {
    this.initLanguage();
  }

  private initLanguage() {
    const storedLang = localStorage.getItem('userLang');
    const initialLang = storedLang || this.defaultLanguage;
    this.loadTranslations(initialLang).subscribe();
  }

  public loadTranslations(lang: string): Observable<any> {
    // Use the full language code for the file name
    return this.http.get(`./assets/i18n/${lang}.json`).pipe(
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

  public setLanguagePreference(lang: string): void {
    localStorage.setItem('userLang', lang);
    this.loadTranslations(lang).subscribe();
  }

  public getCurrentLanguage(): string {
    return this._currentLanguage.value;
  }
}
