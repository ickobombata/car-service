import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, MOCK_CARS } from './car-data';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  availableMakes: string[] = [];
  selectedMake = '';
  selectedPriceRange = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCars();
  }

  private loadCars() {
    // Simulate API call
    setTimeout(() => {
      this.cars = MOCK_CARS;
      this.filteredCars = [...this.cars];
      this.availableMakes = [...new Set(this.cars.map(car => car.make))].sort();
    }, 500);
  }

  filterCars() {
    this.filteredCars = this.cars.filter(car => {
      const makeMatch = !this.selectedMake || car.make === this.selectedMake;
      const priceMatch = this.checkPriceRange(car.price);
      return makeMatch && priceMatch;
    });
  }

  private checkPriceRange(price: number): boolean {
    if (!this.selectedPriceRange) return true;
    
    switch (this.selectedPriceRange) {
      case '0-20000':
        return price < 20000;
      case '20000-25000':
        return price >= 20000 && price <= 25000;
      case '25000-30000':
        return price >= 25000 && price <= 30000;
      case '30000+':
        return price > 30000;
      default:
        return true;
    }
  }

  getMainImage(car: Car): string {
    const mainImage = car.images.find(img => img.isMain);
    return mainImage ? mainImage.url : car.images[0].url;
  }

  viewCarDetail(carId: number) {
    this.router.navigate(['/cars', carId]);
  }
}
