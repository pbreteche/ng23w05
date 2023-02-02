import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";

@Injectable({
  providedIn: 'root'
})
export class CurrentContactService {
  data?: Contact;
}
