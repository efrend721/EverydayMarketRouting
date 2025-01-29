import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NameValidatorDirective } from './register-page/validators/name.validator';
import { PhoneValidatorDirective } from './register-page/validators/phone.validator';
import { EmailValidatorDirective } from './register-page/validators/email.validator';
import { DobValidatorDirective } from './register-page/validators/dob.validator';
import { AddressValidatorDirective } from './register-page/validators/address.validator';
import { ProvinceValidatorDirective } from './register-page/validators/province.validator';
import { CountryValidatorDirective } from './register-page/validators/country.validator';

const routes: Routes = [
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  declarations: [
    RegisterPageComponent,
    NameValidatorDirective,
    PhoneValidatorDirective,
    EmailValidatorDirective,
    DobValidatorDirective,
    AddressValidatorDirective,
    ProvinceValidatorDirective,
    CountryValidatorDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [RouterModule],
})
export class CoreModule { }
