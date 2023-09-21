import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]',
})
export class ConfirmationPanelDirective {
 /*  numberOfClicks = 0; */
  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    return window.confirm(' Estás seguro de querer guardar?');
    /* console.log('button', btn, 'number of clicks:', this.numberOfClicks++); */
  }

  constructor() {}
}
