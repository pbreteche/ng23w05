import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ContactListService} from "./contact/contact-list.service";
import {Contact} from "../model/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact|undefined> {
  constructor(private contactList: ContactListService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact|undefined> {
    const index = route.paramMap.get('index');

    if (index != null) {
      return this.contactList.get(+index);
    }

    return of(undefined);
  }
}
