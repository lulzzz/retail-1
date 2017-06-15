import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-logout',
  template: `
   <div class="col-xl-12 text-center">
   <br><br>
    <h1>注销成功</h1>
    <a [routerLink]="['/account/login']">重新登录</a>
   </div>
`
})
export class LogoutComponent implements OnInit {

  constructor(protected authService:AuthService) { }

  ngOnInit() {
    this.authService.SignOut();
  }

}
