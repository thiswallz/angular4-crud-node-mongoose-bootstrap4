import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product'
import { ProductsService } from '../services/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductsModalViewComponent } from '../products-modal-view/products-modal-view.component'
import { ProductsModalEditComponent } from '../products-modal-edit/products-modal-edit.component'


@Component({
  selector: '[app-products-list-item]',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.css']
})
export class ProductsListItemComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Input() product: Product;

  constructor(private productService: ProductsService, private modalService: BsModalService) { }

  ngOnInit() {
  }

	openModalView(product: Product){
		this.bsModalRef = this.modalService.show(ProductsModalViewComponent);
		this.bsModalRef.content.title = `Product ${product.description}`;
		this.bsModalRef.content.product = product;
	}

  openModalEdit(product: Product){
		this.bsModalRef = this.modalService.show(ProductsModalEditComponent);
		this.bsModalRef.content.title = `Edit Product ${product.description}`;
		this.bsModalRef.content.product = product;
  }
  
	onClickDeleted(product: Product):void {
		this.productService.delete(product).subscribe(
			response => {
			}, 
			err => {
				console.log("Error delete (check node server) ", err);
		});
	}
}
