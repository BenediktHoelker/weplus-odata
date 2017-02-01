import { Directive, ElementRef, EventEmitter, Inject, Input, Renderer } from '@angular/core';
import { MdInputContainer } from '@angular/material';

@Directive({
  selector: '[newDeliveryFocus]'
})
export class FocusInputDirective {
  @Input('newDeliveryFocus') newDeliveryFocusEvent: EventEmitter<boolean>;

  constructor(
    @Inject(ElementRef) private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.newDeliveryFocusEvent.subscribe(event => {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    });
  }
}
