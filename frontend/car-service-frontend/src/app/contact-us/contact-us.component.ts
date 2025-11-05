import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactFormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor(private translationService: TranslationService) {} // Inject TranslationService

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactFormData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show an alert
    alert(this.translationService.getTranslation('CONTACT_US.THANK_YOU_MESSAGE'));
    
    // Reset form
    this.contactFormData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
