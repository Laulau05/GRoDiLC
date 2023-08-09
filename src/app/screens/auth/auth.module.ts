import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RegisterComponent } from './register/register.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
