import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { send } from '@emailjs/browser';
import { environment } from '../config';

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

  isSubmitting = false;

  constructor(private translationService: TranslationService) {} // Inject TranslationService

  onSubmit() {
    this.isSubmitting = true;

    const templateParams = {
      name: this.contactFormData.name,
      from_email: this.contactFormData.email,
      phone: this.contactFormData.phone,
      title: this.contactFormData.subject,
      message: this.contactFormData.message
    };

    send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      environment.emailjs.publicKey
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert(this.translationService.getTranslation('CONTACT_US.THANK_YOU_MESSAGE'));
      this.resetForm();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again later.');
    })
    .finally(() => {
      this.isSubmitting = false;
    });
  }

  private resetForm() {
    this.contactFormData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
