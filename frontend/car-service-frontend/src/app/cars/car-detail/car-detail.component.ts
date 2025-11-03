import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car-data';
import { CarService } from '../car.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;
  currentImageIndex = 0;
  selectedImage: any;
  isLoading: boolean = true;
  // useMockData: boolean = false; // Feature switch for car detail

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const carId = params['id']; // carId is now a string
      this.loadCar(carId);
    });
  }

  public loadCar(carId: string) {
    this.isLoading = true; // Set loading to true

    // Simulate API call
    setTimeout(() => {
      this.carService.getCarById(carId).subscribe({
        next: (response: Car | undefined) => {
          this.car = response;
          if (this.car) {
            this.selectedImage = this.car.images[0];
          }
          this.isLoading = false; // Set loading to false after real data is loaded
        },
        error: (error) => {
          console.error('Error fetching car details:', error);
          this.isLoading = false; // Set loading to false even if there's an error
        }
      });
    }, 500);
  }

  selectImage(index: number) {
    if (this.car) {
      this.currentImageIndex = index;
      this.selectedImage = this.car.images[index];
    }
  }

  nextImage() {
    if (this.car && this.currentImageIndex < this.car.images.length - 1) {
      this.currentImageIndex++;
      this.selectedImage = this.car.images[this.currentImageIndex];
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.selectedImage = this.car!.images[this.currentImageIndex];
    }
  }

  goBack() {
    this.router.navigate(['/cars']);
  }

  scheduleTestDrive() {
    // Navigate to contact page with pre-filled message
    this.router.navigate(['/contact-us'], {
      queryParams: {
        subject: 'schedule-test-drive',
        message: this.translationService.getTranslation('CAR_DETAIL.SCHEDULE_TEST_DRIVE_MESSAGE', {
          carMake: this.car?.make || '',
          carModel: this.car?.model || '',
          carStockNumber: this.car?.stockNumber || 'N/A'
        })
      }
    });
  }

  requestInfo() {
    // Navigate to contact page with pre-filled message
    this.router.navigate(['/contact-us'], {
      queryParams: {
        subject: 'request-info',
        message: this.translationService.getTranslation('CAR_DETAIL.REQUEST_INFO_MESSAGE', {
          carMake: this.car?.make || '',
          carModel: this.car?.model || '',
          carStockNumber: this.car?.stockNumber || 'N/A'
        })
      }
    });
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString(this.translationService.getCurrentLanguage(), { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
