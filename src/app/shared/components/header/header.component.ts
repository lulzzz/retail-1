import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    protected isCollapsed: boolean = true;
    protected navClose: boolean = true;

    protected username: string = 'test';

    constructor(protected authService: AuthService, protected router: Router) {
    }
    ngOnInit() {
        // var account = this.authService.GetAccount();
        // {
        //     this.username = account.username;
        // }
    }

    protected ToggleNavbar() {
        this.navClose = !this.navClose;
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
}
