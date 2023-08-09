import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  immeubleForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialog: MatDialogRef<FormComponent>
  ) { }

  ngOnInit(): void {
    this.immeubleForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      adress: ['', Validators.required],
    })
    if(this.data.immeuble){
      this.immeubleForm.patchValue({
        libelle: this.data.immeuble.libelle
      })
    }
  }

  closeDialog(): void{
    this.dialog.close()
  }
}
