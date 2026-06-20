import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';


@Component({
  selector: 'app-contact-us-component',
  imports: [ButtonModule,InputTextModule,TextareaModule,ReactiveFormsModule],
  templateUrl: './contact-us-component.html',
  styleUrl: './contact-us-component.scss',
})
export class ContactUsComponent {
   contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      message: ['']
    });
  }

  submitForm() {
    console.log(this.contactForm.value);
  }
}

