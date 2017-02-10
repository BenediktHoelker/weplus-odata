import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Yard } from '../models/yard';

@Component({
  selector: 'wp-add-delivery',
  template: `
    <span class="app-action" (click)="createDelivery.emit(yards)">
      <button md-fab><md-icon>add circle</md-icon></button>
    </span>
  `,
})

export class AddDeliveryComponent {
  @Input() yards: Yard[];
  @Output() createDelivery = new EventEmitter<Yard[]>();
}
