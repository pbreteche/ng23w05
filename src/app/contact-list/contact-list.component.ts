import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from "../../model/contact";
import DATA from "../../stub/contacts";
import {ContactListService} from "../contact/contact-list.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Output()
  contactSelected = new EventEmitter<Contact>();

  constructor(public listService: ContactListService) {
  }

  setCurrent(contact: Contact) {
    this.contactSelected.emit(contact);
  }
}
