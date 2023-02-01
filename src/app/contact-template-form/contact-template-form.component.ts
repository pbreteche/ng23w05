import { Component } from '@angular/core';
import {Contact} from "../../model/contact";

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent {
  contact = new Contact();
}
