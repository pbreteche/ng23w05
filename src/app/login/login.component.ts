import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private auth: AuthService
  ) {}

  get isLoggedIn(): boolean {
    return !!this.auth.token;
  }

  logIn() {
    this.auth.token = 'abc123';
  }

  logOut() {
    this.auth.token = '';
  }
}
