import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[changestyle]',
})
export class ConfirmationChangestyleDirective {
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = '#FFD700';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  constructor(private elementRef: ElementRef) {}
}
