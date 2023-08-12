import { Component, Inject, OnInit } from '@angular/core';
import { ActionModal } from '../../immeuble/immeuble.component';
import { UsersService } from 'src/app/services/users.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/state/user/user.model';
import { AppartementState, UserState } from 'src/app/state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUser, UpdateUser } from 'src/app/state/user/user.action';
import { Appartement } from 'src/app/state/appartement/appartement.model';
import { GetAppartements } from 'src/app/state/appartement/appartement.action';


@Component({
  selector: 'app-form-locataire',
  templateUrl: './form-locataire.component.html',
  styles: [
  ]
})
export class FormLocataireComponent implements OnInit {

  @Select(UserState.selectStateData) users$!: Observable<User[]>;
  @Select(AppartementState.selectStateData) appartements$!: Observable<Appartement[]>;
  isLoading$: boolean = false;
  users: any;
  appartements: any;

  userForm!: FormGroup;
  constructor(
    public fromBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormLocataireComponent>,
  ) {}

  ngOnInit(): void {
    this.userForm = this.fromBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      cni: ['', Validators.required],
      appartement: ['', Validators.required]
    })

    if(this.data && this.data.user){
      const user = this.data.user
      this.userForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        cni: user.cni,
        appartement: user.appartement
      })
    }

    this.store.dispatch(new GetAppartements())
      this.appartements$.subscribe(appartements => {
        this.appartements = appartements;
      });
  }

  onSubmit(){
    const userObject = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      phoneNumber: this.userForm.value.phoneNumber,
      cni: this.userForm.value.cni,
      appartementId: this.userForm.value.appartement
    }

    if(this.userForm.invalid){
      return;
    }

    if(!this.data.user){
      this.store.dispatch(new AddUser(userObject)).subscribe(
        (res) => {
          this.closeDialog();
        },
        (err) => {
          console.log(err);
        }
      )
    }else{
      this.store.dispatch(new UpdateUser(this.data.user.id, userObject)).subscribe(
        (res) => {
          this.closeDialog();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  closeDialog(){
    this.dialog.close();
  }

}
