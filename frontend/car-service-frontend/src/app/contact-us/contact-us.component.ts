import { Component } from '@angular/core';

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

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactFormData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    
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
