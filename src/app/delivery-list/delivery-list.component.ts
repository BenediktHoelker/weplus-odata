import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent {
  @Input() deliveries;
  //for now, we will pass filter down and apply
  @Input() visibilityFilter;
}
