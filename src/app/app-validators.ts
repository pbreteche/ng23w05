import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class AppValidators {
  static period(form: AbstractControl): ValidationErrors | null {
    const fromField = form.get('from');
    const toField = form.get('to');

    if (!fromField?.value || !toField?.value) {
      return null;
    }
    if (fromField?.invalid || toField?.invalid) {
      return null;
    }

    if (fromField.value > toField.value) {
      return {period: {fromValue: fromField.value, toValue: toField.value, errorCode: '5137'}}
    }

    return null;
  }

  static minDate(min: Date): ValidatorFn {
    return function (form: AbstractControl): ValidationErrors | null {
      if (!form.value) {
        return null;
      }

      const dateValue = new Date(form.value);

      if (dateValue < min) {
        return {minDate: {extra: 'additional data', min: min}};
      }

      return null;
    }
  }
}
