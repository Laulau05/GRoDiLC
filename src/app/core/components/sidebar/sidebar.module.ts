import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarMenuItemComponent } from './sidebar-menu-item/sidebar-menu-item.component';
import {SvgModule} from "../../../shared/svg/svg.module";
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { UsersService } from 'src/app/services/users.service';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarMenuItemComponent,
    SidebarFooterComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  providers: [
    UsersService
  ]
})
export class SidebarModule { }
