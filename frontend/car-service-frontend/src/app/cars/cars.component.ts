import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, mapPocketbaseCarToCar } from './car-data';
import { CarService } from './car.service';

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
  // selectedPriceRange = ''; // Removed as price is no longer in Car interface
  isLoading: boolean = true; // Loading indicator

  constructor(private router: Router, private carService: CarService) {}

  ngOnInit() {
    this.loadCars();
  }

  public loadCars() {
    this.isLoading = true; // Set loading to true at the start of data fetching
    // Simulate API call
    setTimeout(() => {
      this.carService.getCars().subscribe({
        next: response => {
          this.cars = response.items.map(mapPocketbaseCarToCar);
          this.filteredCars = [...this.cars];
          this.availableMakes = [...new Set(this.cars.map(car => car.make))].sort();
          this.isLoading = false; // Set loading to false after real data is loaded
        },
        error: (error) => {
          console.error('Error fetching cars:', error);
          this.isLoading = false; // Set loading to false even if there's an error
        }
      });
    }, 500);
  }

  filterCars() {
    this.filteredCars = this.cars.filter(car => {
      const makeMatch = !this.selectedMake || car.make === this.selectedMake;
      // const priceMatch = this.checkPriceRange(car.price); // Removed as price is no longer in Car interface
      return makeMatch; // Removed priceMatch
    });
  }

  // private checkPriceRange(price: number): boolean { // Removed as price is no longer in Car interface
  //   if (!this.selectedPriceRange) return true;
    
  //   switch (this.selectedPriceRange) {
  //     case '0-20000':
  //       return price < 20000;
  //     case '20000-25000':
  //       return price >= 20000 && price <= 25000;
  //     case '25000-30000':
  //       return price >= 25000 && price <= 30000;
  //     case '30000+':
  //       return price > 30000;
  //     default:
  //       return true;
  //   }
  // }

  getMainImage(car: Car): string {
    return car.images[0].url;
  }

  viewCarDetail(carId: string) {
    this.router.navigate(['/cars', carId]);
  }
}
