import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { ElementRouteModule } from './element-routing/elementRouting.module';
// import { MemoryHistory } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(ElementRouteModule.forRoot('remoteangular', 'RouteChangeEvent')),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
  ],
};
