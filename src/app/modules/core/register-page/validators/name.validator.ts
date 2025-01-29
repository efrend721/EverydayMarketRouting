import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    { 
      provide: NG_VALIDATORS, 
      useExisting: NameValidatorDirective, 
      multi: true 
    }
  ],
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const namePattern = /^[a-zA-Z ]{5,}$/;
    return control.value && !namePattern.test(control.value)
      ? { invalidName: 'Name must contain only letters and spaces, with at least 5 characters.' }
      : null;
  }
}
