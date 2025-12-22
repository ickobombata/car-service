import { Component, OnInit, OnDestroy } from '@angular/core';
import { getSliderContent, getCustomerReviews, SliderContent, Review } from './slider-content';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';
import { environment } from '../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sliderContent: SliderContent[] = [];
  customerReviews: Review[] = [];
  currentSlide = 0;
  currentReviewIndex = 0;
  reviewGroups: Review[][] = [];
  showCars = environment.showCars;
  private slideInterval: any;
  private langChangeSubscription: Subscription | undefined;

  constructor(private translationService: TranslationService) { } // Inject TranslationService

  ngOnInit() {
    this.langChangeSubscription = this.translationService.currentLanguage$.subscribe(() => {
      this.initializeTranslatedContent();
    });
    this.initializeSlider();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private initializeTranslatedContent() {
    const translate = (key: string) => this.translationService.getTranslation(key);
    let allSliderContent = getSliderContent(translate);
    
    if (!this.showCars) {
      this.sliderContent = allSliderContent.filter(slide => slide.buttonLink !== "/cars");
    } else {
      this.sliderContent = allSliderContent;
    }
    
    this.customerReviews = getCustomerReviews(translate);
    this.initializeReviews(); // Re-initialize reviews to reflect new translations
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
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 7000); // Change slide every 8 seconds
  }

  private resetAutoSlide() {
    this.startAutoSlide(); // Simply restart the timer
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderContent.length;
    this.resetAutoSlide(); // Reset timer on manual next
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.sliderContent.length - 1 
      : this.currentSlide - 1;
    this.resetAutoSlide(); // Reset timer on manual previous
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
    return date.toLocaleDateString(this.translationService.getCurrentLanguage(), { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
