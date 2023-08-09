import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

export enum ActionModal {
  Add = 'Add',
  Delete = 'Delete',
  Details = 'Details',
  Edit = 'Edit'
}
@Component({
  selector: 'app-immeuble',
  templateUrl: './immeuble.component.html',
  styles: [
  ]
})
export class ImmeubleComponent {

  constructor(private _matDialog: MatDialog){}

  openDialog(type: string, immeuble: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this._matDialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this._matDialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Delete:
        this._matDialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this._matDialog.open(FormComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      default:
        break;

    }
  }

}
