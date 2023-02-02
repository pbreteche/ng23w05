import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {AppValidators} from "./app-validators";

@Directive({
  selector: '[appPeriod]',
  providers: [{provide: NG_VALIDATORS, useExisting: PeriodDirective, multi: true}]
})
export class PeriodDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return AppValidators.period(control);
  }
}
