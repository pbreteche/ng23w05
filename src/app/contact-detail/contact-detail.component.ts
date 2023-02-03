import {Component, OnInit} from '@angular/core';
import {Contact} from "../../model/contact";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContactListService} from "../contact/contact-list.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact?: Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactList: ContactListService
  ) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const index = params.get('index');
      if (index != null) {
        this.contact = this.contactList.get(+index);
      }
    });
  }
}
