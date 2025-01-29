import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appProvinceValidator]',
  providers: [
    { provide: NG_VALIDATORS, 
      useExisting: ProvinceValidatorDirective, 
      multi: true 
    }
  ],
})
export class ProvinceValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const validProvinces = [
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
    return control.value && !validProvinces.includes(control.value)
      ? { invalidProvince: 'Select a valid province.' }
      : null;
  }
}
