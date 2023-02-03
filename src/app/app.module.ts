import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactTemplateFormComponent} from './contact-template-form/contact-template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { PeriodDirective } from './period.directive';
import { MinDateDirective } from './min-date.directive';
import {HttpClientModule} from "@angular/common/http";
import {GlobalErrorHandlerService} from "./global-error-handler.service";
import { ErrorMessageComponent } from './error-message/error-message.component';
import {RouterModule} from "@angular/router";
import {ContactResolver} from "./contact.resolver";
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./auth.guard";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactReactiveFormComponent,
    ContactTemplateFormComponent,
    PeriodDirective,
    MinDateDirective,
    ErrorMessageComponent,
    MenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContactListComponent},
      {path: 'contact/nouveau', component: ContactTemplateFormComponent, canActivate: [AuthGuard]},
      {path: 'contact/:index', component: ContactDetailComponent, resolve: {contact: ContactResolver}},
    ])
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr);
  }
}
