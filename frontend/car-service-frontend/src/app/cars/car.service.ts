import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car, mapPocketbaseCarToCar, PocketbaseCar } from './car-data';
import { environment } from '../config';
import { MOCK_CARS } from './mock-car-data';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://avtorevolucija.duckdns.org/api/collections/cars/records';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    if (environment.useMockData) {
      return of(MOCK_CARS);
    }
    return this.http.get<{ items: PocketbaseCar[] }>(this.apiUrl).pipe(
      map(response => response.items.map(mapPocketbaseCarToCar))
    );
  }

  getCarById(id: string): Observable<Car | undefined> {
    if (environment.useMockData) {
      const car = MOCK_CARS.find(c => c.id === id);
      return of(car);
    }
    const url = `${this.apiUrl.replace('/records', '/records/')}${id}`;
    return this.http.get<any>(url);
  }
}
