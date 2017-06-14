import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { TranslateService as TranslateServiceCore } from '@ngx-translate/core';

@Injectable()
export class TranslateService {

    constructor(protected translateService: TranslateServiceCore) {
    }

    public Translate(key: string): Observable<string> {
        return this.translateService.get(key);
    }

    public TranslateInstant(key: string): string {
        return this.translateService.instant(key);
    }
}