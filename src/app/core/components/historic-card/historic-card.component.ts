import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historic-card',
  templateUrl: './historic-card.component.html',
  styles: [
  ]
})
export class HistoricCardComponent {
  @Input() historic: any;
  constructor() { }
}
