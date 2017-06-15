import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

import { AccountStorage } from './services/retail_services/storage/account.storage';

import { AccountService } from './services/retail_services/account.service';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard.service';
import { TranslateService } from './services/translate.service';
import { ChineseDivisionService } from './services/chinese.division.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgxUIModule } from '@swimlane/ngx-ui';


export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxUIModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ]
})
export class SharedServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedServicesModule,
            providers: [
                AccountStorage,
                AccountService,
                AuthService,
                AuthGuardService,
                TranslateService,
                ChineseDivisionService
            ]
        };
    }
}
