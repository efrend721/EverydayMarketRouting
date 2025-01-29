import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appDobValidator]',
  providers: [
    { 
      provide: NG_VALIDATORS, 
      useExisting: DobValidatorDirective, 
      multi: true 
    }
  ],
})
export class DobValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const inputDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - inputDate.getFullYear();
    return age < 18
      ? { invalidDob: 'You must be at least 18 years old.' }
      : null;
  }
}
