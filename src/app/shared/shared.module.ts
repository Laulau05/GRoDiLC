import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from './svg/svg.module';
import { MaterialModule } from './material/material.module';
import { LocataireItemModule } from './components/locataire-item/locataire-item.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SvgModule,
    MaterialModule,
    LocataireItemModule
  ],
  exports: [
    SvgModule,
    MaterialModule,
    LocataireItemModule
  ]
})
export class SharedModule { }
