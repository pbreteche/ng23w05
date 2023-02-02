import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";
import {HttpClient} from "@angular/common/http";
import {CurrentContactService} from "./current-contact.service";

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  list: Contact[] = [];
  constructor(
    private http: HttpClient,
    private currentContact: CurrentContactService
  ) {
    this.http.get('assets/data.json')
      .subscribe(data => {
        this.list.push(...data as Contact[]);
        this.currentContact.data = this.list[0];
      })
  }
}
