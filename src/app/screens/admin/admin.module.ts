import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { LocatairesComponent } from './locataires/locataires.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImmeubleModule } from './immeuble/immeuble.module';
import { ImmeubleService } from 'src/app/services/immeuble.service';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    LocatairesComponent,
    DocumentsComponent,
    PaiementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SvgModule,
    SharedModule,
    ImmeubleModule
  ],
  exports: [
  ],
  providers: [
    ImmeubleService
  ]
})
export class AdminModule { }
