import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
/*ElementRef --> permite el acceso directo al DOM ...NO seguro */
/*Renderer2 --> de forma seguro en conbinacion con ElementRef; pg de referencia(https://www.tektutorialshub.com/angular/renderer2-angular/) */
@Directive({
  selector: '[changestyle]',
})
export class ConfirmationChangestyleDirective {
  /*  Evento al pasar el ratón*/
  @HostListener('mouseover') onMouseOver() {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      '#FFD700'
    );
  }
  /*  Evento fuera del ratón*/
  @HostListener('mouseout') onMouseOut() {
    this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', '');
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) {}
}
