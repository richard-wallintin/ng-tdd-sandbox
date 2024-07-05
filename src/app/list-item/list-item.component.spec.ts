import {TestBed} from '@angular/core/testing';

import {ListItemComponent} from './list-item.component';
import {screen} from "@testing-library/angular";

describe('ListItemComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ListItemComponent],
    teardown: {destroyAfterEach: false}
  }))

  it('should show ice cream flavor, size and price', () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.flavor = 'Vanilla'
    fixture.componentInstance.size = 'M'
    fixture.componentInstance.price = '1 €'

    fixture.detectChanges()

    screen.getByText("Vanilla")
    screen.getByText("M")
    screen.getByText("1 €")
  });

  it('should show a button to buy', () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.flavor = 'Vanilla'
    fixture.componentInstance.size = 'M'
    fixture.componentInstance.price = '1 €'

    let buyWasClicked = false
    fixture.componentInstance.buy.subscribe(() => {
        buyWasClicked = true
      }
    )

    fixture.detectChanges()

    const buyButton = screen.getByRole("button", {
      name: "Buy"
    });

    buyButton.click()

    expect(buyWasClicked).toBeTrue()
  });
});
