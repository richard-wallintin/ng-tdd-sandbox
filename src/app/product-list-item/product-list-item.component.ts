import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

export type ProductListItem = Readonly<{
  flavor: string,
  priceInEuros: number
}>

@Component({
  selector: 'tdd-product-list-item',
  standalone: true,
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListItemComponent {

  @Input({required: true})
  item!: ProductListItem;

  @Output()
  buy = new EventEmitter<ProductListItem>();

}
