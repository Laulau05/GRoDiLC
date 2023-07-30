import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from './svg/svg.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SvgModule,
    MaterialModule,
  ],
  exports: [
    SvgModule,
    MaterialModule,
  ]
})
export class SharedModule { }
