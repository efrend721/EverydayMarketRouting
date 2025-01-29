import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})


export class RegisterPageComponent {

  user = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    province: '',
    country: '',
    terms: false,
  };

  provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Northwest Territories',
    'Nunavut',
    'Yukon',
  ];

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/products']); 
  }
}
