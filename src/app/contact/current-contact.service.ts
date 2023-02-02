import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentContactService {
  private _subject = new ReplaySubject<Contact>(1);

  getData(): Observable<Contact> {
    return this._subject.asObservable();
  }

  set data(contact: Contact) {
    this._subject.next(contact);
  }
}
