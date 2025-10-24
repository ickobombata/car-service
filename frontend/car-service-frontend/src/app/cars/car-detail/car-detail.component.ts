import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, MOCK_CARS } from '../car-data';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;
  currentImageIndex = 0;
  selectedImage: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const carId = +params['id'];
      this.loadCar(carId);
    });
  }

  private loadCar(carId: number) {
    // Simulate API call
    setTimeout(() => {
      this.car = MOCK_CARS.find(car => car.id === carId);
      if (this.car) {
        this.selectedImage = this.car.images[0];
      }
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
        message: `I'm interested in scheduling a test drive for the ${this.car?.year} ${this.car?.make} ${this.car?.model} (Stock #${this.car?.stockNumber}). Please contact me to arrange a convenient time.`
      }
    });
  }

  requestInfo() {
    // Navigate to contact page with pre-filled message
    this.router.navigate(['/contact-us'], {
      queryParams: {
        subject: 'request-info',
        message: `I'm interested in getting more information about the ${this.car?.year} ${this.car?.make} ${this.car?.model} (Stock #${this.car?.stockNumber}). Please provide additional details about this vehicle.`
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
