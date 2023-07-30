import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ImmeubleComponent } from './immeuble/immeuble.component';
import { LocatairesComponent } from './locataires/locataires.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    ImmeubleComponent,
    LocatairesComponent,
    DocumentsComponent,
    PaiementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SvgModule,
    SharedModule
  ]
})
export class AdminModule { }
