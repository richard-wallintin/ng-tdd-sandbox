import {ChangeDetectionStrategy, Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'tdd-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  //@Input({required: true})
  flavor!: string;

  size!: string;

  price!: string;

  buy = new EventEmitter<void>();

}
