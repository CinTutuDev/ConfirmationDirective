import { Component } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss'],
})
export class ChangeColorComponent {
  texTransform: string =
    'Hay dos formas de escribir programas sin errores; sólo la tercera funciona. (Alan J. Perlis).\nSi los constructores construyeran edificios como los programadores programan aplicaciones, un pájaro carpintero podría destruir toda la civilización. (Gerald Weinberg)';
}
