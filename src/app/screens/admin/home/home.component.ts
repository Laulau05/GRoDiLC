import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, Select } from '@ngxs/store';
import { AppartementState, ImmeubleState, UserState } from 'src/app/state';
import { Appartement } from 'src/app/state/appartement/appartement.model';
import { Observable } from 'rxjs';
import { ActionModal } from '../immeuble/immeuble.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { GetAppartements } from 'src/app/state/appartement/appartement.action';
import { Immeuble } from 'src/app/state/immeuble/immeuble.model';
import { GetImmeubles } from 'src/app/state/immeuble/immeuble.action';
import { User } from 'src/app/state/user/user.model';
import { GetUsers } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  @Select(AppartementState.selectStateData) appartements$!: Observable<Appartement[]>;
  @Select(ImmeubleState.selectStateData) immeubles$!: Observable<Immeuble[]>;
  @Select(UserState.selectStateData) users$!: Observable<User[]>;
  isLoading$: boolean = false;
  appartements: any;
  appartementsNumber!: any;
  immeublesNumber!: any;
  usersNumber!: any;
  users: any;
  immeubles: any;

  historics: any[] = [
    {
      id: 1,
      title: "Appartements",
      quantity: this.appartementsNumber,
      icon: "payment"
    },
    {
      id: 2,
      title: "Locataires",
      quantity: this.usersNumber,
      icon: "agents"
    },
    {
      id: 3,
      title: "Immeubles",
      quantity: this.immeublesNumber,
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
        this.appartementsNumber = this.appartements?.length
        this.updateHistorics();
      });

      this.store.dispatch(new GetUsers())
    this.users$.subscribe(users => {
      this.users = users;
      this.usersNumber = this.users?.length;
      this.updateHistorics();
    });

    this.store.dispatch(new GetImmeubles())
      this.isLoading$ = false
      this.immeubles$.subscribe(immeubles => {
        this.immeubles = immeubles;
        this.immeublesNumber = this.immeubles?.length
        this.updateHistorics();
      });
    }, 2000)
  }

  updateHistorics(): void {
    this.historics[0].quantity = this.appartementsNumber;
    this.historics[1].quantity = this.usersNumber;
    this.historics[2].quantity = this.immeublesNumber;
  }
}
