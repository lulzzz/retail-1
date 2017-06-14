import { Service, ServiceRoute, ServiceRequestCallback } from "./service";

export class AccountService extends Service {

  protected service_route_service: string = 'Account';

  public ManagerLogin(username: string, password: string, callback: ServiceRequestCallback): void {
    super.Request(new ServiceRoute(this.service_route_area, this.service_route_service, 'ManagerLogin', this.ServiceVersion), {
      'username': username,
      'password': password
    }, callback);
  }

  public ManagerProfile(callback: ServiceRequestCallback): void {
    super.Request(new ServiceRoute(this.service_route_area, this.service_route_service, 'ManagerProfile', this.ServiceVersion), {}, callback);
  }

  public ManagerUpdatePassword(password_current: string, password: string, callback: ServiceRequestCallback): void {
    super.Request(new ServiceRoute(this.service_route_area, this.service_route_service, 'ManagerUpdatePassword', this.ServiceVersion), {
      'password_current': password_current,
      'password': password
    }, callback);
  }
}
