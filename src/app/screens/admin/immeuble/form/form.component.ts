import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { ImmeubleService } from 'src/app/services/immeuble.service';
import { AddImmeuble, UpdateImmeuble } from 'src/app/state/immeuble/immeuble.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  immeubleForm!: FormGroup;
  isSubmitting!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormComponent>,
    private immeubleService: ImmeubleService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.immeubleForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      adress: ['', Validators.required],
    })
    if(this.data && this.data.immeuble){
      const immeuble = this.data.immeuble
      this.immeubleForm.patchValue({
        libelle: immeuble.libelle,
        description: immeuble.description,
        adress: immeuble.address
      })
    }
  }

  //create immeuble
  onSubmit(){

    const immeubleObject = {
      libelle: this.immeubleForm.value.libelle,
      description: this.immeubleForm.value.description,
      address: this.immeubleForm.value.adress
    }

    if(this.immeubleForm.invalid){
      return;
    }

    this.isSubmitting = true;

    if(!this.data.immeuble){
      this.store.dispatch(new AddImmeuble(immeubleObject)).subscribe(
        (res) => {
          alert("immeuble créée avec success")
          this.closeDialog();
        },
        (err) => {
          console.log(err);
        }
      );
      this.isSubmitting = false;
    }else{
      this.store.dispatch(new UpdateImmeuble(immeubleObject, this.data.immeuble.id)).subscribe(
        (res) => {
          this.closeDialog();
        },
        (err) => {
          console.log(err);
        }
      );
      this.isSubmitting = false;
    }
  }

  closeDialog(): void{
    this.dialog.close()
  }
}
