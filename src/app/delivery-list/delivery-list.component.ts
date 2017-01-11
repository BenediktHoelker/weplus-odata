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
  @Input() registrationFilter;
  @Input() processingFilter;
  @Output() selected = new EventEmitter();

  constructor(){
    console.log(this.deliveries);
    console.log(this.selectedYard);
    console.log(this.registrationFilter);
    console.log(this.processingFilter);
  }
}
