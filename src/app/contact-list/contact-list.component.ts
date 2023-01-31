import { Component } from '@angular/core';
import {Contact} from "../../model/contact";
import DATA from "../../stub/contacts";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts: Contact[] = DATA;
  current: Contact = {};

  setCurrent(contact: Contact) {
    this.current = contact;
  }
}
