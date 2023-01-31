import {Component} from '@angular/core';
import {Contact} from "../model/contact";
import DATA from "../stub/contacts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carnet d\'adresse';
  current?: Contact;

  setCurrent(contact: Contact) {
    console.log(contact);
    this.current = contact;
  }
}
