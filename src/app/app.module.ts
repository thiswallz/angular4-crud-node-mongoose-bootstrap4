import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, AlertModule } from 'ngx-bootstrap';
import { ValidationDirective } from './common/directives/validation.directive';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductsService } from './products/services/products.service';
import { ProductsModalViewComponent } from './products/products-modal-view/products-modal-view.component';
import { ProductsListItemComponent } from './products/products-list-item/products-list-item.component';
import { ProductsModalInsertComponent } from './products/products-modal-insert/products-modal-insert.component';
import { ProductsModalEditComponent } from './products/products-modal-edit/products-modal-edit.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavbarComponent,
    ProductsModalViewComponent,
    ProductsListItemComponent,
    ProductsModalInsertComponent,
    ValidationDirective,
    ProductsModalEditComponent,
    HomeIndexComponent
  ],
  entryComponents: [
    ProductsModalViewComponent,
    ProductsModalInsertComponent,
    ProductsModalEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    routing
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
