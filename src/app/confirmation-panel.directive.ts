import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]',
})
export class ConfirmationPanelDirective {
  @Input('confirm') exectFunction: FunctionConstructor | any;

  @HostListener('click', ['$event.target'])
  onClick() {
    const confirmed = window.confirm(' Estás seguro de querer guardar?');

    if (confirmed) {
      this.exectFunction();
    }
  }

  constructor() {}
}
