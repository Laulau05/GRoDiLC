import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documents-item',
  templateUrl: './documents-item.component.html',
  styles: [
  ]
})
export class DocumentsItemComponent {
  @Input() documents: any[] = [];
  selectDocument: any;

  selectDocumentMethod(document: any){
    this.selectDocument = document;
  }
}
