import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-products-modal-edit',
  templateUrl: './products-modal-edit.component.html',
  styleUrls: ['./products-modal-edit.component.css']
})
export class ProductsModalEditComponent implements OnInit {
  modalForm: FormGroup;
  title: string;
  product: Product = new Product();

  constructor(private productService: ProductsService, public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.modalForm = new FormGroup({
      description: new FormControl(this.product.description, [
          Validators.required,
          Validators.minLength(4)
      ]), 
      price: new FormControl(this.product.price, [
        Validators.pattern("\\d{1,}\\.?\\d{1,2}"), 
        Validators.min(0),
        Validators.required
      ]),
      language: new FormControl() 
    });
  }

  onClickSave():void {
    this.productService.update(this.product).subscribe(
			response => {
        this.bsModalRef.hide();
        this.bsModalRef = null;
			}, 
			err => {
				console.log("Error insert (check node server) ", err);
		});
  }

}
