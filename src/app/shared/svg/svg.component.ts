import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html'
})
export class SvgComponent {

  @Input() icon: any;

}
