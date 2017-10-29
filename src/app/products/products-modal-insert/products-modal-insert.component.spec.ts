import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalInsertComponent } from './products-modal-insert.component';

describe('ProductsModalInsertComponent', () => {
  let component: ProductsModalInsertComponent;
  let fixture: ComponentFixture<ProductsModalInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsModalInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsModalInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
