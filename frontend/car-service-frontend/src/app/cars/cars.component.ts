import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './car-data';
import { CarService } from './car.service';
import { TranslationService } from '../services/translation.service';
import { FormControl } from '@angular/forms'; // Import FormControl

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
  minPrice: number = 0; // New: Min price for slider
  maxPrice: number = 0; // New: Max price for slider
  priceSliderControl = new FormControl(0); // Use FormControl for the slider
  isLoading: boolean = true; // Loading indicator
  currentView: 'table' | 'list' = 'table'; // New property for view switching

  constructor(private router: Router, private carService: CarService, private translationService: TranslationService) {}

  ngOnInit() {
    this.loadCars();
    // Subscribe to slider value changes to filter cars
    this.priceSliderControl.valueChanges.subscribe(() => {
      this.filterCars();
    });
  }

  public loadCars() {
    this.isLoading = true; // Set loading to true at the start of data fetching
    // Simulate API call
    setTimeout(() => {
      this.carService.getCars().subscribe({
        next: (response: Car[]) => {
          this.cars = response;
          this.filteredCars = [...this.cars];
          this.availableMakes = [...new Set(this.cars.map(car => car.make))].sort();

          // Initialize min/max prices for slider
          this.minPrice = Math.min(...this.cars.map(car => car.price));
          this.maxPrice = Math.max(...this.cars.map(car => car.price));
          this.priceSliderControl.setValue(this.maxPrice); // Set initial slider value to max price

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
      const priceMatch = car.price <= (this.priceSliderControl.value || 0); // Use FormControl value for filtering
      return makeMatch && priceMatch;
    });
  }

  formatLabel(value: number | null): string {
    if (!value) {
      return `0`;
    }
    return `${value}`; // Or format as currency: `${value | currency:'USD':'symbol':'1.0-0'}`
  }

  switchView(view: 'table' | 'list') {
    this.currentView = view;
  }

  getMainImage(car: Car): string {
    return car.images[0].url;
  }

  viewCarDetail(carId: string) {
    this.router.navigate(['/cars', carId]);
  }
}
