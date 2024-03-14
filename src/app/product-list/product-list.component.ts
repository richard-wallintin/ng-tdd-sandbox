import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductListItem, ProductListItemComponent} from '../product-list-item/product-list-item.component';

@Component({
  selector: 'tdd-product-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductListItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  @Input({required: true})
  products!: ProductListItem[];

  @Output()
  buy = new EventEmitter<ProductListItem>();

}
