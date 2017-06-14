import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { AccountStorage } from './storage/account.storage';
import { TranslateService } from '../translate.service';

import { environment } from '../../../../environments/environment';

export interface ServiceRequestSuccessCallback {
  (response: any): void
}
export interface ServiceRequestErrorCallback {
  (code: number, message?: string, stacktrace?: string): void
}

export interface ServiceRequestCallback {
  next: ServiceRequestSuccessCallback;
  error?: ServiceRequestErrorCallback;
}

export class ServiceRoute {

  constructor(protected area: string, protected service: string, protected action: string, protected version: string) {
  }

  public get Area(): string {
    return this.area;
  }
  public get Service(): string {
    return this.service;
  }
  public get Action(): string {
    return this.action;
  }
  public get Version(): string {
    return this.version;
  }

  public get Key(): string {
    return `${this.Area ? this.Area : ''}-${this.Service ? this.Service : ''}-${this.Action ? this.Action : ''}|${this.Version ? this.Version : ''}`;
  }
}

@Injectable()
export abstract class Service {

  protected gateway_url: string = 'http://192.168.1.233:8000/app.do';

  protected service_route_area: string = '';
  protected service_route_service: string = '';

  protected service_version_major: number = 1;
  protected service_version_minor: number = 0;
  protected service_version_maintenance: number = 0;
  protected service_version_build: number = 0;

  protected default_service_request_error_callback: ServiceRequestErrorCallback = (code, message, stacktrace) => {
    if (!environment.production) {
      console.log(`service_request_error: ${code} ${message ? message : ''} ${stacktrace ? stacktrace : ''}`);
    }
  }

  public get ServiceVersion() {
    return `${this.service_version_major}.${this.service_version_minor}.${this.service_version_maintenance}.${this.service_version_build}`;
  }

  constructor(protected http: Http, protected accountStorage: AccountStorage, protected translateService: TranslateService) {
  }

  protected Request(route: ServiceRoute, request: any, callback: ServiceRequestCallback): void {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Event', route.Key);

    let account = this.accountStorage.Get();
    if (account) {
      headers.append("Authorization", 'Bearer ' + account.token)
    }

    this.http.post(this.gateway_url, request, { headers: headers })
      .subscribe((res: Response) => {
        let code = +res.headers.get("StatusCode");
        if (code == 0) {
          callback.next(res.json());
        }
        else {
          var res_data = res.json();
          {
            this.Error(route, code, res_data.message, res_data.stacktrace, callback);
          }
        }
      }, (error: any) => {
        var msg = <any>error;
        {
          this.Error(route, -1, msg, null, callback);
        }
      });

  }

  protected TranslateErrorMessage(route: ServiceRoute, code: number, message: string): string {
    return this.translateService.TranslateInstant(`Service.${route.Area ? route.Area : 'Default'}.${route.Service ? route.Service : ''}.${route.Action ? route.Action : ''}.StatusCode.${code}`);
  }

  protected Error(route: ServiceRoute, code: number, message: string, stacktrace: string, callback: ServiceRequestCallback): void {
    
    if (this.default_service_request_error_callback) {
      this.default_service_request_error_callback(code, message, stacktrace);
    }

    if (code > 0) {
      message = this.TranslateErrorMessage(route, code, message);
    }

    if (callback.error) {
      callback.error(code, message);
    }

  }
}
