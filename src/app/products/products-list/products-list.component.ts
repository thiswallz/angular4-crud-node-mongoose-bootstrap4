import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductsModalInsertComponent } from '../products-modal-insert/products-modal-insert.component';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
	public alerts: any = [];
	bsModalRef: BsModalRef;
	productList: Product[];
	loading: boolean;
	inserted: boolean;

  	constructor(private productService: ProductsService, private modalService: BsModalService) {
		this.productService.list$.subscribe(
			data => {
				this.productList = data;
			}, 
			err => {
				console.log("Error getting list (check node server) ", err);
		});
		this.productService.loadingList$.subscribe(
			response => this.loading = response
		);
		this.productService.inserted$.subscribe(
			response => {
				if(response===true){
					this.alerts.push({
						type: 'md-local',
						msg: `Product added correctly`,
						timeout: 6000
					});
					this.loadData();
				}
			}
		);
		this.productService.updated$.subscribe(
			response => {
				if(response===true){
					this.alerts.push({
						type: 'warning',
						msg: `Product updated correctly`,
						timeout: 6000
					});
					this.loadData();
				}
			}
		);
		this.productService.deleted$.subscribe(
			response => {
				if(response===true){
					this.alerts.push({
						type: 'danger',
						msg: `Product deleted correctly`,
						timeout: 6000
					});
					this.loadData();
				}
			}
		);
	}

	ngOnInit() {
		this.loadData();
	}

	loadData():void {
		this.productService.getAll();
	}

	openModalInsert(event: Event):void{
		event.preventDefault();
		this.bsModalRef = this.modalService.show(ProductsModalInsertComponent);
		this.bsModalRef.content.title = `Insert Product`;
	}


}
