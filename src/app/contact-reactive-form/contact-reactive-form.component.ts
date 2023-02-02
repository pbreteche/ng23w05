import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../model/contact";
import {ContactListService} from "../contact/contact-list.service";
import {AppValidators} from "../app-validators";

@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent {
  form = new FormGroup({
    civility: new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z-]+$/),
      ]),
    }),
    email: new FormControl('', Validators.email),
    period: new FormGroup({
      from: new FormControl('', [
        AppValidators.minDate(new Date()),
        Validators.required,
      ]),
      to: new FormControl(''),
    }, AppValidators.period),
  });

  constructor(public listService: ContactListService) {
  }

  get firstname()  {
    return this.form.get('civility.firstname') as AbstractControl;
  }
  get lastname()  {
    return this.form.get('civility.lastname') as AbstractControl;
  }
  get email()  {
    return this.form.get('email') as AbstractControl;
  }

  getField(path: string) {
    return this.form.get(path);
  }

  save() {
    const contact = new Contact();
    const formValue = this.form.value;
    contact.firstName = formValue.civility?.firstname || undefined;
    contact.lastName = formValue.civility?.lastname || undefined;
    contact.email = formValue.email || undefined;
    this.listService.list.push(contact);
    this.form.reset();
  }
}
