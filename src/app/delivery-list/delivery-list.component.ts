import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent {
  @Input() deliveries;
  @Input() selectedYard;
  @Input() statusFilter;
  @Output() selected = new EventEmitter();
}
