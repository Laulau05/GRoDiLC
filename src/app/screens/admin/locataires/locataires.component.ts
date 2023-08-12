import { Component, OnInit } from '@angular/core';
import { ActionModal } from '../immeuble/immeuble.component';
import { MatDialog } from '@angular/material/dialog';
import { FormLocataireComponent } from './form-locataire/form-locataire.component';
import { Store, Select } from '@ngxs/store';
import { UserState } from 'src/app/state';
import { User } from 'src/app/state/user/user.model';
import { Observable } from 'rxjs';
import { GetUsers } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-locataires',
  templateUrl: './locataires.component.html',
  styles: [
  ]
})
export class LocatairesComponent implements OnInit {

  @Select(UserState.selectStateData) users$!: Observable<User[]>;
  isLoading$: boolean = false;
  locataires: any;

  constructor(
    private dialog: MatDialog, 
    private store: Store
  ){}

  openDialog(type: string, user: any = null): void {
    switch(type) {
      case ActionModal.Add:
        this.dialog.open(FormLocataireComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Edit:
        this.dialog.open(FormLocataireComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {user: user}
        })
        break;
      case ActionModal.Delete:
        this.dialog.open(FormLocataireComponent, {
          autoFocus: false,
          panelClass: 'scrollModal',
          data: {}
        })
        break;
      case ActionModal.Details:
        this.dialog.open(FormLocataireComponent, {
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
      this.store.dispatch(new GetUsers())
      this.isLoading$ = false
      this.users$.subscribe(users => {
        this.locataires = users;
      });
    }, 2000)
  }
}
