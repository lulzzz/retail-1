import { Service, ServiceRoute, ServiceRequestCallback } from './service';
import { Page, Order, Query } from './features/param';

export class ReportService extends Service {

  protected service_route_service = 'Report';

  public ReportList(page: Page, orders: Order[], querys: Query[], callback: ServiceRequestCallback): void {
      super.Request(new ServiceRoute(this.service_route_area, this.service_route_service, 'QueryReport', this.ServiceVersion), {
        page: page,
        orders: orders,
        querys: querys
      }, callback);
  }
}
