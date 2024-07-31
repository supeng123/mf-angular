import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';


export const productRoutes: Route[] = [
    {
        path: '',
        component: ProductsComponent,
    },
    {
        path: 'list',
        loadComponent: () => import('./product-list/product-list.component').then(c => c.ProductListComponent),
    }
]