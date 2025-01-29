import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCountryValidator]',
  providers: [
    { 
      provide: NG_VALIDATORS, 
      useExisting: CountryValidatorDirective, 
      multi: true 
    }
  ],
})
export class CountryValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value !== 'Canada') {
      return { invalidCountry: 'You must select Canada to proceed.' };
    }
    return null;
  }
}
