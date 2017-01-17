import { Directive, ElementRef, Inject, Input, Renderer } from '@angular/core';

@Directive({
  selector: 'md-select .deviation-type'
})
export class DeviationFocusDirective {

  constructor(
    @Inject(ElementRef) private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit() {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
  }
}
