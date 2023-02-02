import {Component} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactListService} from "../contact/contact-list.service";
import {CurrentContactService} from "../contact/current-contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  constructor(
    public listService: ContactListService,
    public currentContact: CurrentContactService
  ) {}

  setCurrent(contact: Contact) {
    this.currentContact.data = contact;
  }
}
