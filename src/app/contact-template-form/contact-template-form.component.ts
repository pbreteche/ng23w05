import { Component } from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactListService} from "../contact/contact-list.service";

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent {
  contact = new Contact();
  period = {from: '', to: ''};

  constructor(public listService: ContactListService) {
  }

  save() {
    this.listService.list.push(this.contact);
    this.contact = new Contact();
  }
}
