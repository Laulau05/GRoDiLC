import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { HistoricCardModule } from './components/historic-card/historic-card.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    PageHeaderModule,
    HistoricCardModule
  ],
  exports: [
    SidebarModule,
    NavbarModule,
    PageHeaderModule,
    HistoricCardModule
  ]
})
export class CoreModule { }
