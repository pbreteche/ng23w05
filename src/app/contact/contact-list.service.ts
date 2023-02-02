import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";
import {HttpClient} from "@angular/common/http";
import {CurrentContactService} from "./current-contact.service";
import {catchError, retry, throwError} from "rxjs";

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
      .pipe(
        retry(3),
        catchError((error) => {
          console.log(error);
          return throwError(() => {});
        })
      )
      .subscribe(data => {
        this.list.push(...data as Contact[]);
        this.currentContact.data = this.list[0];
      })
  }

  add(contact: Contact) {
    this.list.push(contact);
    this.http.post('contact', contact)
      .pipe(
        catchError((error) => {
          console.log(error.status);
          return throwError(() => {})

        })
      )
      .subscribe(data => console.log(data))
  }
}
