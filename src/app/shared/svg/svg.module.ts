import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { DocIconComponent } from './doc-icon/doc-icon.component';
import { DashboardIconComponent } from './dashboard-icon/dashboard-icon.component';
import { SeeIconComponent } from './see-icon/see-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { BellIconComponent } from './bell-icon/bell-icon.component';
import { AddPersonIconComponent } from './add-person-icon/add-person-icon.component';
import { AgentIconComponent } from './agent-icon/agent-icon.component';
import { DownloadIconComponent } from './download-icon/download-icon.component';
import { DeleteIconComponent } from './delete-icon/delete-icon.component';
import { FileIconComponent } from './file-icon/file-icon.component';
import { OpenBoxIconComponent } from './open-box-icon/open-box-icon.component';
import { ToolsIconComponent } from './tools-icon/tools-icon.component';
import { ParamsIconComponent } from './params-icon/params-icon.component';
import { AddDocIconComponent } from './add-doc-icon/add-doc-icon.component';
import { VehiculeIconComponent } from './vehicule-icon/vehicule-icon.component';
import { BuildingIconComponent } from './building-icon/building-icon.component';
import { PaymentIconComponent } from './payment-icon/payment-icon.component';

@NgModule({
    declarations: [
        SvgComponent,
        AccountIconComponent,
        DocIconComponent,
        DashboardIconComponent,
        SeeIconComponent,
        MenuIconComponent,
        BellIconComponent,
        AddPersonIconComponent,
        AgentIconComponent,
        DownloadIconComponent,
        DeleteIconComponent,
        FileIconComponent,
        OpenBoxIconComponent,
        ToolsIconComponent,
        ParamsIconComponent,
        AddDocIconComponent,
        VehiculeIconComponent,
        BuildingIconComponent,
        PaymentIconComponent
    ],
    imports: [ CommonModule ],
    exports: [
        SvgComponent
    ],
    providers: [],
})
export class SvgModule {}