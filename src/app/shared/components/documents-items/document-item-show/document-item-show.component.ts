import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-item-show',
  templateUrl: './document-item-show.component.html',
  styles: [
  ]
})
export class DocumentItemShowComponent {
  @Input() documentSelect: any;
}
