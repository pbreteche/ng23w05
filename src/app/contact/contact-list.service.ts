import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";
import DATA from "../../stub/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  list: Contact[] = DATA;
  constructor() {
  }
}
