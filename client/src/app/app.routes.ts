import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },

    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'error-page',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: 'error-page',
    },
];
