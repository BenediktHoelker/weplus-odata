import { Component, Input } from '@angular/core';
import { Delivery }    from '../shared/delivery.model';

@Component({
  selector: 'app-processing-form',
  templateUrl: './processing-form.component.html'
})
export class ProcessingFormComponent {
  @Input()
  delivery: Delivery;
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.delivery); }
}
