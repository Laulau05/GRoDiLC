import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ImmeubleState } from 'src/app/state';
import { AddAppartement, UpdateAppartement } from 'src/app/state/appartement/appartement.action';
import { GetImmeubles } from 'src/app/state/immeuble/immeuble.action';
import { Immeuble } from 'src/app/state/immeuble/immeuble.model';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html'
})
export class FormAppartementComponent implements OnInit {

  @Select(ImmeubleState.selectStateData) immeubles$!: Observable<Immeuble[]>;

  appartementForm!: FormGroup;
  isSubmitting!: boolean;
  immeubles: any;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormAppartementComponent>,
  ) { }

  ngOnInit(): void {
    this.appartementForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      numAppartement: ['', Validators.required],
      immeuble: ['', Validators.required],
    })
    if(this.data && this.data.appartement){
      const appartement = this.data.appartement
      this.appartementForm.patchValue({
        libelle: appartement.libelle,
        description: appartement.description,
        prix: appartement.prix,
        numAppartement: appartement.numAppartement,
        immeuble: appartement.immeuble
      })
    }

    this.store.dispatch(new GetImmeubles())
    this.immeubles$.subscribe(immeubles => {
      this.immeubles = immeubles;
    });
  }

  //create appartement
  onSubmit(){

    const appartementObject = {
      libelle: this.appartementForm.value.libelle,
      description: this.appartementForm.value.description,
      prix: this.appartementForm.value.prix,
      numAppartement: this.appartementForm.value.numAppartement,
      immeubleId: this.appartementForm.value.immeuble
    }

    if(this.appartementForm.invalid){
      return;
    }

    this.isSubmitting = true;

    if(!this.data.appartement){
      this.store.dispatch(new AddAppartement(appartementObject)).subscribe(
        (res) => {
          this.closeDialog();
          alert('Appartement ajouté avec succès');
        },
        (err) => {
          console.log(err);
        }
      )
      this.isSubmitting = false;
    }else{
      this.store.dispatch(new UpdateAppartement(appartementObject, this.data.appartement.id)).subscribe(
        (res) => {
          this.closeDialog();
        },
        (err) => {
          console.log(err);
        }
      )
    }

  }

  closeDialog(): void{
    this.dialog.close()
  }

}
