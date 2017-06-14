import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
} from '@angular/router';

import { AuthService } from './auth.service';
// import { AlertService } from '@swimlane/ngx-ui';
import { ToastService} from '../modules/toast/toast.service'
import {ToastType, ToastConfig} from "../modules/toast/toast-model";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(protected router: Router, protected toastService: ToastService, protected authService: AuthService) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.authService.IsAuthenticated) {
          const toastCfg = new ToastConfig(ToastType.ERROR,'账户未登录, 请先登录','', 3000);
            this.toastService.toast(toastCfg)
              // .subscribe({
              // next: () => {
              this.router.navigate(['/account/login']);
            // },
            // });
            // this.toastService({ title: '未登录', content: '账户未登录, 请先登录', style: 'warning' }).subscribe({
            //     next: () => { this.router.navigate(['/account/login']) },
            // });
            return false;
        }

        let url: string = state.url;
        console.log(`IsAuthenticated: ${url}`);

        return true;
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
