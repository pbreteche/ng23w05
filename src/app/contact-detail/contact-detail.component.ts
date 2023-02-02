import {Component} from '@angular/core';
import {Contact} from "../../model/contact";
import {CurrentContactService} from "../contact/current-contact.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  contact$: Observable<Contact>;

  constructor(currentContact: CurrentContactService) {
    this.contact$ = currentContact.getData();
  }
}
