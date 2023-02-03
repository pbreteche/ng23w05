import {ErrorHandler, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private lastErrorMessageSubject = new Subject<string>();
  handleError(error:any) {
    if (typeof error == 'string') {
      this.lastErrorMessageSubject.next(error);
    }
  }

  get lastErrormessage(): Observable<string> {
    return this.lastErrorMessageSubject.asObservable();
  }
}
