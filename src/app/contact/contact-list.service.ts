import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  list: Contact[] = [];
  constructor(private http: HttpClient) {
    this.http.get('assets/data.json')
      .subscribe(data => this.list.push(...data as Contact[]))
  }
}
