import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-locataire-item-detail',
  templateUrl: './locataire-item-detail.component.html',
  styles: [
  ]
})
export class LocataireItemDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public locataire: any){}
}
