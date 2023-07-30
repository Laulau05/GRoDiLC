import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { LocataireItemDetailComponent } from './locataire-item-detail/locataire-item-detail.component';

@Component({
  selector: 'app-locataire-item',
  templateUrl: './locataire-item.component.html',
  styles: [
  ]
})
export class LocataireItemComponent implements OnInit {
  @Input() locataire!: any;

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
  }

  viewDetails(){
    this.dialog.open(LocataireItemDetailComponent, {
      data: this.locataire
    })
  }
}
