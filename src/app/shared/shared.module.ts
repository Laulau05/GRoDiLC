import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from './svg/svg.module';
import { MaterialModule } from './material/material.module';
import { LocataireItemModule } from './components/locataire-item/locataire-item.module';
import { DocumentsItemModule } from './components/documents-items/documents-item.module';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule,
    SvgModule,
    MaterialModule,
    LocataireItemModule,
    DocumentsItemModule
  ],
  exports: [
    SvgModule,
    MaterialModule,
    LocataireItemModule,
    DocumentsItemModule,
    TruncatePipe
  ]
})
export class SharedModule { }
