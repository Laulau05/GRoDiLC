import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ImmeubleService } from 'src/app/services/immeuble.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ImmeubleState } from 'src/app/state';
import { Immeuble } from 'src/app/state/immeuble/immeuble.model';
import { GetImmeubles } from 'src/app/state/immeuble/immeuble.action';

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
export class ImmeubleComponent implements OnInit {

  @Select(ImmeubleState.selectStateData) immeubles$!: Observable<Immeuble[]>; //ici nous allons recuperer les données
  isLoading$: boolean = false;
  immeubles: any;

  constructor(
    private _matDialog: MatDialog, 
    private immeubleService: ImmeubleService, 
    private route: ActivatedRoute,
    private store: Store
  ){}

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
          data: {immeuble: immeuble}
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

  ngOnInit(): void {
    this.isLoading$ = true
    setTimeout(() => {
      //dispatch data
      this.store.dispatch(new GetImmeubles())
      this.isLoading$ = false
      // Utilisez l'observable pour surveiller les changements
      this.immeubles$.subscribe(immeubles => {
        this.immeubles = immeubles;
      });
    }, 2000)
  }

  

}
