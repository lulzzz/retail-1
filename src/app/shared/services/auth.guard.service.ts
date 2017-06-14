import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
} from '@angular/router';

import { AuthService } from './auth.service';
import { AlertService } from '@swimlane/ngx-ui';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(protected router: Router, protected alertService: AlertService, protected authService: AuthService) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.authService.IsAuthenticated) {
            this.alertService.alert({ title: '未登录', content: '账户未登录, 请先登录', style: 'warning' }).subscribe({
                next: () => { this.router.navigate(['/account/login']) },
            });
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