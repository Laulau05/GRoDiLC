import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ImmeubleComponent } from './immeuble/immeuble.component';
import { LocatairesComponent } from './locataires/locataires.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaiementComponent } from './paiement/paiement.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: HomeComponent },
      { path: "immeubles", component: ImmeubleComponent },
      { path: "locataires", component: LocatairesComponent },
      { path: "documents", component: DocumentsComponent },
      { path: "paiement", component: PaiementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
