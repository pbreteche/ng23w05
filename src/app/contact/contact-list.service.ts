import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, firstValueFrom, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  list: Contact[] = [];
  constructor(
    private http: HttpClient
  ) {
    firstValueFrom(this.http.get('assets/data.json', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'security-token',
      })
    }))
      .catch((error) => {
        return throwError(() => 'Impossible de contacter le serveur');
      })
      .then(data => {
        this.list.push(...data as Contact[]);
      });
  }

  add(contact: Contact) {
    this.list.push(contact);
    this.http.post('contact', contact)
      .pipe(
        catchError((error) => {
          return throwError(() => 'Le serveur nous a répondu '+error.status)
        })
      )
      .subscribe(data => console.log(data))
  }

  get(index: number): Contact|undefined {
    return this.list[index];
  }
}
