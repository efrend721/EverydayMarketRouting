import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

// Custom Phone Validator Directive
@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    { 
    provide: NG_VALIDATORS, 
    useExisting: PhoneValidatorDirective, 
    multi: true 
    }
  ],
})
export class PhoneValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const phonePattern = /^[0-9]{10}$/;
    if (!control.value || phonePattern.test(control.value)) {
      return null;
    }
    return { invalidPhone: 'Phone number must be a 10-digit number.' };
  }
}

