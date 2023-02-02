import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {AppValidators} from "./app-validators";

@Directive({
  selector: '[appMinDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input('appMinDate')
  min: string|Date = '';
  validate(control: AbstractControl): ValidationErrors | null {
    if (typeof this.min == 'string') {
      this.min = new Date(this.min);
    }

    return AppValidators.minDate(this.min)(control);
  }
}
