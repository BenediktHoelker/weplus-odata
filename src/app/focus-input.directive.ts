import { Directive, ElementRef, EventEmitter, Inject, Input, Renderer } from '@angular/core';
import { MdInput } from '@angular/material';

@Directive({
  selector: '[carrierFocus]'
})
export class FocusInputDirective {
  @Input('carrierFocus') focusEvent: EventEmitter<boolean>;

  constructor(
    @Inject(ElementRef) private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.focusEvent.subscribe(event => {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    });
  }
}
