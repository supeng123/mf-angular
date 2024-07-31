import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./nx-welcome.component').then(c => c.NxWelcomeComponent)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@remoteangular/products').then((m) => m.productRoutes),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@remoteangular/orders').then((m) => m.OrdersComponent),
  },
];
