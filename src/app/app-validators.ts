import {AbstractControl, ValidationErrors} from "@angular/forms";

export class AppValidators {
  static period(form: AbstractControl): ValidationErrors | null {
    const fromValue = form.get('from')?.value;
    const toValue = form.get('to')?.value;

    if (!fromValue || !toValue) {
      return null;
    }

    if (fromValue > toValue) {
      return {period: {fromValue: fromValue, toValue: toValue, errorCode: '5137'}}
    }

    return null;
  }
}
