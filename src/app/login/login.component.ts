import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { TOKEN_APPROVE } from '../constants';
import { LocalStorage } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginService,
    private localStorage: LocalStorage,
  ) { }

  requestToken: Subscription;
  requestSession: Subscription;

  ngOnInit(): void {
    const token: string = this.localStorage.getElement('token');
    if (!token) {
      this.requestToken = this.loginService.getTokenRequest()
        .subscribe((token) => {
          this.localStorage.setElement('token', token);
          window.location.assign(`${TOKEN_APPROVE}${token}?redirect_to=http://localhost:4200/login`);
        })
    }
  }

  login() {
    const token: string = this.localStorage.getElement('token');
    this.requestSession = this.loginService.getSessionRequest(token)
      .subscribe((session) => {
        this.localStorage.setElement('session', session);
      })

  };

  ngOnDestroy(): void {
    this.requestToken.unsubscribe();
    this.requestSession.unsubscribe();
  }
}
