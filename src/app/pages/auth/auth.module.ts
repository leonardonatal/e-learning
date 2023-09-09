import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '@app/pages/auth/login/login.component';
import { SignupComponent } from '@app/pages/auth/signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, MatToolbarModule],
})
export class AuthModule {}
