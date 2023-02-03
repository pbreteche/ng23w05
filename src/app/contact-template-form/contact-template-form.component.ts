import { Component } from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactListService} from "../contact/contact-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent {
  contact = new Contact();
  period = {from: '', to: ''};
  today = new Date();

  constructor(
    public listService: ContactListService,
    private router: Router
  ) {}

  save() {
    const id = this.listService.add(this.contact);
    this.router.navigate(['contact', id]);
    this.contact = new Contact();
  }
}
