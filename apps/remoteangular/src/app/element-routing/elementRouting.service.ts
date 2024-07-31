import { Inject, Injectable, InjectionToken } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RouteChangedEvent } from './elementRouting.model';

export const MICRO_APP_NAME = new InjectionToken<string>('microAppName');
export const ROUTE_CHANGE_EVENT_NAME = new InjectionToken<string>('routeChangeEventName');

@Injectable({
  providedIn: 'root'
})
export class ElementRoutingService {
  private routeChange$: Observable<any>;
  private path = '';

  constructor(
    @Inject(MICRO_APP_NAME) private microApp: string,
    @Inject(ROUTE_CHANGE_EVENT_NAME) routeChangeEvent: RouteChangedEvent,
    private router: Router,
    private location: Location,
  ) {
    // this.routeChange$ = fromEvent(document, routeChangeEvent).pipe(
    //   map((event: CustomEvent<RouteChangedEvent>) => event.detail.route),
    //   filter((event) => event['app'] === this.microApp)
    // );
    this.routeChange$ = this.router.events
  }

  initRouting(): void {
    this.routeChange$.subscribe((event) => {
      if (event.path !== this.path) {
        this.router.navigateByUrl(`${event.path}`);
        this.path = event.path
      }
    });

    // this.router.navigateByUrl(this.location.path(true));
  }
}