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
}
