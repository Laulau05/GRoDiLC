import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, Select } from '@ngxs/store';
import { AppartementState, ImmeubleState } from 'src/app/state';
import { Appartement } from 'src/app/state/appartement/appartement.model';
import { Observable } from 'rxjs';
import { ActionModal } from '../immeuble/immeuble.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { GetAppartements } from 'src/app/state/appartement/appartement.action';
import { Immeuble } from 'src/app/state/immeuble/immeuble.model';
import { GetImmeubles } from 'src/app/state/immeuble/immeuble.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  @Select(AppartementState.selectStateData) appartements$!: Observable<Appartement[]>;
  @Select(ImmeubleState.selectStateData) immeubles$!: Observable<Immeuble[]>;
  isLoading$: boolean = false;
  appartements: any;

  historics: any[] = [
    {
      id: 1,
      title: "Paiements",
      quantity: 12,
      icon: "payment"
    },
    {
      id: 2,
      title: "Locataires",
      quantity: 22,
      icon: "agents"
    },
    {
      id: 3,
      title: "Immeubles",
      quantity: 2,
      icon: "building"
    },
    {
      id: 4,
      title: "Documents",
      quantity: 42,
      icon:"doc"
    }
  ]

  constructor(
    private _matDialog: MatDialog, 
    private store: Store
  ) { }

  openDialog(type: string, appartement: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this._matDialog.open(FormAppartementComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this._matDialog.open(FormAppartementComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {appartement: appartement}
        })
        break;
      case ActionModal.Delete:
        this._matDialog.open(FormAppartementComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this._matDialog.open(FormAppartementComponent, {
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
      this.store.dispatch(new GetAppartements())
      this.isLoading$ = false
      this.appartements$.subscribe(appartements => {
        this.appartements = appartements;
      });
    }, 2000)
  }
}
