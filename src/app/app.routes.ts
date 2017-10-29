import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsRoutes }    from './products/products.routes';
import { homeRoutes }    from './home/home.routes';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/index',
    pathMatch: 'full'
  },
  ...productsRoutes,
  ...homeRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
