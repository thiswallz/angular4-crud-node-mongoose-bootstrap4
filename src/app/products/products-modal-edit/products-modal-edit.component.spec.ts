import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalEditComponent } from './products-modal-edit.component';

describe('ProductsModalEditComponent', () => {
  let component: ProductsModalEditComponent;
  let fixture: ComponentFixture<ProductsModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
