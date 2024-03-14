import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListItem, ProductListItemComponent} from './product-list-item.component';
import {screen} from "@testing-library/angular";


describe('ProductListItemComponent', () => {
  const item: ProductListItem = {
    flavor: "Chocolate",
    priceInEuros: 3
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListItemComponent],
      teardown: {destroyAfterEach: false}
    })
      .compileComponents();
  });

  function setupWithChocolateItem() {
    let component: ProductListItemComponent;
    let fixture: ComponentFixture<ProductListItemComponent>;

    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;
    component.item = item

    fixture.detectChanges();
    return fixture
  }

  it('zeigt Eissorte', () => {
    setupWithChocolateItem()
    screen.getByText("Chocolate")
  });

  it('zeigt Preis', () => {
    setupWithChocolateItem()
    screen.getByText("3 €")
  });

  it('erlaubt das "Kaufen" des Items', () => {
    const component = setupWithChocolateItem().componentInstance
    let itemWasClicked: ProductListItem|null = null

    component.buy.subscribe((it: ProductListItem) => itemWasClicked = it)
    screen.getByText("Buy").click()

    expect(itemWasClicked as any).toBe(item)
  });
});
