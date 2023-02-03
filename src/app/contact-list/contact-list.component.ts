import {Component} from '@angular/core';
import {ContactListService} from "../contact/contact-list.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  constructor(
    public listService: ContactListService
  ) {}
}
