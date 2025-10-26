import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car-data';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://avtorevolucija.duckdns.org/api/collections/cars/records';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCarById(id: string): Observable<any> {
    const url = `${this.apiUrl.replace('/records', '/records/')}${id}`;
    return this.http.get<any>(url);
  }
}
