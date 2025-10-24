import { Component, OnInit, OnDestroy } from '@angular/core';
import { SLIDER_CONTENT, CUSTOMER_REVIEWS, SliderContent, Review } from './slider-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sliderContent: SliderContent[] = SLIDER_CONTENT;
  customerReviews: Review[] = CUSTOMER_REVIEWS;
  currentSlide = 0;
  currentReviewIndex = 0;
  reviewGroups: Review[][] = [];
  private slideInterval: any;

  ngOnInit() {
    this.initializeSlider();
    this.initializeReviews();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private initializeSlider() {
    this.currentSlide = 0;
  }

  private initializeReviews() {
    // Group reviews into sets of 3
    this.reviewGroups = [];
    for (let i = 0; i < this.customerReviews.length; i += 3) {
      this.reviewGroups.push(this.customerReviews.slice(i, i + 3));
    }
    this.currentReviewIndex = 0;
  }

  private startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderContent.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.sliderContent.length - 1 
      : this.currentSlide - 1;
  }

  nextReviews() {
    if (this.currentReviewIndex < this.reviewGroups.length - 1) {
      this.currentReviewIndex++;
    }
  }

  previousReviews() {
    if (this.currentReviewIndex > 0) {
      this.currentReviewIndex--;
    }
  }

  goToReviewGroup(index: number) {
    this.currentReviewIndex = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
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
