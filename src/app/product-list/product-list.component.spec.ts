import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';

import { ProductListComponent } from './product-list.component';
import {ProductListItem, ProductListItemComponent} from '../product-list-item/product-list-item.component';
// import {MockComponent, ngMocks} from 'ng-mocks';
import {By} from '@angular/platform-browser';

describe('ProductListComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      // declarations: [MockComponent(ProductListItemComponent)],
      teardown: {destroyAfterEach: false},
    })
    .compileComponents();
  });

  function setup(productsInput: ProductListItem[]): ComponentFixture<ProductListComponent> {
    let fixture: ComponentFixture<ProductListComponent>;

    fixture = TestBed.createComponent(ProductListComponent);
    fixture.componentRef.setInput('products', productsInput);

    fixture.detectChanges();
    return fixture
  }

  it('should show empty message when product list is empty', () => {
    setup([]);

    expect(screen.queryByText("No products available")).toBeTruthy();
  });

  it('should show each product name from input products', () => {
    const productInput = [
      {flavor: "Chocolate", priceInEuros: 3},
      {flavor: "Strawberry", priceInEuros: 2},
    ]
    const fixture = setup(productInput);

    const itemComponents = fixture.debugElement.queryAll(By.directive(ProductListItemComponent));
    expect(itemComponents.length).toBe(2);
    // expect(itemComponents[0].item).toBe(productInput[0]);
    // expect(itemComponents[1].item).toBe(productInput[1]);
    expect(screen.queryByText("Chocolate")).toBeTruthy();
    expect(screen.queryByText("Strawberry")).toBeTruthy();
    expect(screen.queryByText("No products available")).toBeFalsy();
  });

  it('should propagate buy event from product list item', () => {
    const productInput = [
      {flavor: "Chocolate", priceInEuros: 3},
      {flavor: "Strawberry", priceInEuros: 2},
    ]
    const fixture = setup(productInput);
    // const itemComponents = fixture.debugElement.queryAll(By.directive(ProductListItemComponent));
    let emittedProduct: ProductListItem|null = null;

    fixture.componentInstance.buy.subscribe((it: ProductListItem) => {
      emittedProduct = it;
    });

    const buyButton = screen.getAllByText("Buy")[0];
    buyButton.click();
    // itemComponents[0].componentInstance.buy.emit(productInput[0]);

    expect(emittedProduct!).toBe(productInput[0]);
  });
});
