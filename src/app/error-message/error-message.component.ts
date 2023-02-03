import { Component } from '@angular/core';
import {GlobalErrorHandlerService} from "../global-error-handler.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  public lastErrorMessage$: Observable<string>;

  constructor(handler: GlobalErrorHandlerService) {
    // À corriger : le next du GlobalErrorHandler
    // ne rafraichi pas la donnée dans le composant
    this.lastErrorMessage$ = handler.lastErrormessage;
  }
}
