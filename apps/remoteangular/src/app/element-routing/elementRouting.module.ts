import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MICRO_APP_NAME, ElementRoutingService, ROUTE_CHANGE_EVENT_NAME } from './elementRouting.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ElementRouteModule {
  static forRoot(microElementApplication: string, routeChangeEventName: string): ModuleWithProviders<ElementRouteModule> {
    return {
      ngModule: ElementRouteModule,
      providers: [
        ElementRoutingService,
        { provide: MICRO_APP_NAME, useValue: microElementApplication },
        { provide: ROUTE_CHANGE_EVENT_NAME, useValue: routeChangeEventName },
      ],
    };
  }

  constructor(private microRoutingService: ElementRoutingService) {
    microRoutingService.initRouting();
  }
}