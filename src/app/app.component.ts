import { Component } from '@angular/core';
import {Contact} from "../model/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carnet d\'adresse';
  contact: Contact = {
    firstName: 'Alain',
    lastName: 'Delon',
    email: 'alaind@wanadoo.fr',
  };
}
