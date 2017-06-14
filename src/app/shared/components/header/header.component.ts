import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    protected isCollapsed: boolean = true;

    protected username: string = '';

    constructor(protected authService: AuthService) { 

    }
    ngOnInit() {
        var account = this.authService.GetAccount();
        {
            this.username = account.username;
        }
    }

    protected ToggleNavbar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
}
