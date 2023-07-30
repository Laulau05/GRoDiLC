import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styles: [
  ]
})
export class DocumentItemComponent {
  @Input() document: any;
}
