// Import Angular core modules and form validation utilities
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Custom directive to validate address input fields.
 * Ensures the address contains only alphanumeric characters and spaces.
 * 
 * How it works:
 * - Registers itself as a Validator using NG_VALIDATORS provider.
 * - Implements the Validator interface to enforce the `validate` method.
 */
@Directive({
  // Selector for applying this validator as an attribute in templates
  selector: '[appAddressValidator]',
  
  /**
   * Register this directive as a custom validator in Angular's validation pipeline.
   * 
   * - `NG_VALIDATORS`: Injection token for validators.
   * - `useExisting`: Ensures the directive instance is reused (no new instances created).
   * - `multi: true`: Allows multiple validators to coexist under NG_VALIDATORS.
   * 
   * Angular Docs References:
   * - https://angular.io/guide/form-validation#adding-custom-validators-to-template-driven-forms
   * - https://angular.io/api/forms/NG_VALIDATORS
   */
  providers: [
    { 
      provide: NG_VALIDATORS, 
      useExisting: AddressValidatorDirective, 
      multi: true 
    }
  ],
})
export class AddressValidatorDirective implements Validator {
  /**
   * Validates the input control against the address pattern.
   * 
   * @param control - The form control to validate.
   * @returns ValidationErrors | null - Returns an error object if validation fails, otherwise null.
   */
  validate(control: AbstractControl): ValidationErrors | null {
    // Regex pattern: Allows letters (a-z, A-Z), numbers (0-9), and spaces
    const addressPattern = /^[a-zA-Z0-9 ]+$/;

    // Check if the control has a value and violates the pattern
    const isValid = control.value && !addressPattern.test(control.value);

    // Return validation result
    return isValid 
      ? { 
          invalidAddress: 'Address must contain only letters, numbers, and spaces.' 
        } 
      : null; // Return null for valid cases (Angular convention)
  }
}
