import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent {
  @Input() deliveries;
  @Input() processingFilter;
  @Input() registrationFilter;
  @Input() yardFilter;
  @Output() selected = new EventEmitter();
}
