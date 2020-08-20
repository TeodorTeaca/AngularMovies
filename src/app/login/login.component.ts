import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription, Observable } from 'rxjs';
import { TOKEN_APPROVE } from '../services/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit, OnDestroy {
  private request: Subscription;

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    this.LoginService.getSession(token)
      .subscribe((session: string) => {
        console.log("SESSION", session);
        // localStorage.setItem('session', session);
      })
  }


  getToken = function () {
    this.request = this.LoginService.getToken()
      .subscribe((token: string) => {
        this.token = token;
        window.location.assign(`${TOKEN_APPROVE}${token}?redirect_to=http://localhost:4200/login`);
        localStorage.setItem('token', token);
      })
  };


  ngOnDestroy(): void {
    this.request.unsubscribe();
  }

}
