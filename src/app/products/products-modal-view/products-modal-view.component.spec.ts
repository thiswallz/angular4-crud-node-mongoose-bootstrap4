import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalViewComponent } from './products-modal-view.component';

describe('ProductsModalViewComponent', () => {
  let component: ProductsModalViewComponent;
  let fixture: ComponentFixture<ProductsModalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsModalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
