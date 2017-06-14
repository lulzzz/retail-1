import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from "../../shared/services/retail_services/account.service";
import { AuthService } from "../../shared/services/auth.service";

// import { AlertService } from '@swimlane/ngx-ui';

@Component({
  selector: 'app-account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected username: string = '';
  protected password: string = '';

  constructor(protected router: Router,
              // protected alertService: AlertService,
              protected accountService: AccountService, protected authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.IsAuthenticated) {
      // this.alertService.alert({ title: '已登录', content: '账户已登录, 请先注销', style: 'warning' }).subscribe({
      //   next: () => { this.router.navigate(['/']) },
      // });
    }
  }

  protected doLogin(): void {
    this.router.navigate(['/']);
    // this.accountService.ManagerLogin(this.username, this.password, {
    //   next: (res) => {
    //     this.authService.Authenticate(this.username, res.token);
    //     this.router.navigate(['/']);
    //   },
    //   error: (code, message, stacktrace) => {
    //     // this.alertService.alert({ title: `登录失败 ${code} `, content: `${message ? message : ''} ${stacktrace ? stacktrace : ''}`, style: 'warning' });
    //   }
    // });
  }
}
