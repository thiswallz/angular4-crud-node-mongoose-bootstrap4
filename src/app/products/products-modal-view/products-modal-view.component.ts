import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Product } from '../models/product'

@Component({
  selector: 'app-products-modal-view',
  templateUrl: './products-modal-view.component.html',
  styleUrls: ['./products-modal-view.component.css']
})
export class ProductsModalViewComponent implements OnInit {

  title: string;
  product: Product = new Product();
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
