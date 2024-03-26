import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },

    {
        path: 'products',
        component: ProductsComponent
    },

    { path: 'products/:productId', component: SingleProductComponent }, // Route for product details
    
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
