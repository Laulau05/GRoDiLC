import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmeubleComponent } from './immeuble.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ImmeubleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class ImmeubleModule { }
