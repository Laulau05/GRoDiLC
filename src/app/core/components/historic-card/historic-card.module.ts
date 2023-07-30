import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricCardComponent } from './historic-card.component';
import { SvgModule } from 'src/app/shared/svg/svg.module';



@NgModule({
  declarations: [
    HistoricCardComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    HistoricCardComponent
  ]
})
export class HistoricCardModule { }
