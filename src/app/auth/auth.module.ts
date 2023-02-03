import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SignupComponent } from './pages/signup/signup.component';



@NgModule({
  declarations: [LoginComponent, LoginFormComponent, SignupComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
