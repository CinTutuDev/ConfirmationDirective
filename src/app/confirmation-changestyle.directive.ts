import { Directive, HostListener, ElementRef } from '@angular/core';
/*ElementRef --> permite el acceso directo al DOM  */
@Directive({
  selector: '[changestyle]',
})
export class ConfirmationChangestyleDirective {
  /*  Evento al pasar el ratón*/
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = '#FFD700';
  }
  /*  Evento fuera del ratón*/
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  constructor(private elementRef: ElementRef) {}
}
