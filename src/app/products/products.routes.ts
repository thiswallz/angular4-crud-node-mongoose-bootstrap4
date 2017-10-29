import { Routes } from '@angular/router';  
import { ProductsListComponent } from './products-list/products-list.component';  

export const productsRoutes: Routes = [  
    { 
        path: 'products/list', 
        component: ProductsListComponent 
    }
];  