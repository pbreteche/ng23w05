import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactTemplateFormComponent} from './contact-template-form/contact-template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { PeriodDirective } from './period.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactReactiveFormComponent,
    ContactTemplateFormComponent,
    PeriodDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
