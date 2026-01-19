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
  private _isLoaded = new BehaviorSubject<boolean>(false);
  public readonly isLoaded$ = this._isLoaded.asObservable();

  constructor(private http: HttpClient) { }

  public init(): Promise<void> {
    const storedLang = localStorage.getItem('userLang');
    const initialLang = storedLang || this.defaultLanguage;
    return new Promise((resolve) => {
      this.loadTranslations(initialLang).subscribe({
        next: () => {
          this._isLoaded.next(true);
          resolve();
        },
        error: () => {
          this._isLoaded.next(true); // Still resolve to allow app to load
          resolve();
        }
      });
    });
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
    this._isLoaded.next(false);
    this.loadTranslations(lang).subscribe({
      next: () => this._isLoaded.next(true),
      error: () => this._isLoaded.next(true)
    });
  }

  public getCurrentLanguage(): string {
    return this._currentLanguage.value;
  }
}
