import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocataireItemComponent } from './locataire-item.component';
import { LocataireItemDetailComponent } from './locataire-item-detail/locataire-item-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SvgModule } from '../../svg/svg.module';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    LocataireItemComponent,
    LocataireItemDetailComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SvgModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    LocataireItemComponent,
    LocataireItemDetailComponent
  ]
})
export class LocataireItemModule { }
