import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../models/product'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {
	private url = 'http://localhost:3000/api/products/';
	  
	private list = new Subject<Product[]>();    
  	list$ = this.list.asObservable();

	private loadingList = new BehaviorSubject<boolean>(false);    
	loadingList$ = this.loadingList.asObservable();

	private inserted = new BehaviorSubject<boolean>(false);    
	inserted$ = this.inserted.asObservable();

	private updated = new BehaviorSubject<boolean>(false);    
	updated$ = this.updated.asObservable();
	
	private deleted = new BehaviorSubject<boolean>(false);    
	deleted$ = this.deleted.asObservable();
	
    private headers = new Headers({
		'Content-Type' : 'application/json'
	});

	constructor (private http: Http) {}
	 

	getAll():void {
		this.loadingList.next(true);
		this.http.get(this.url)
		.map((res:Response) => this.list.next(res.json()))
		.finally(() => this.loadingList.next(false))
		.catch((error:any) => {
			this.list.error(new Error(error || 'Server error'));
			return Observable.throw(error.json().error || 'Server error')
		}).subscribe();	
	}

	add(product: Product): Observable<void>  {
		return this.http.post(this.url, product, {headers:this.headers})
		.map((res:Response) => this.inserted.next(true));
    }

	update(product: Product): Observable<void> {
		return this.http.put(this.url, product, {headers:this.headers})
		.map((res:Response) => this.updated.next(true));
	}
	
	delete(product: Product): Observable<void> {
		return this.http.delete(`${this.url}/${product._id}`, {headers:this.headers})
		.map((res:Response) => this.deleted.next(true));
    }
}
