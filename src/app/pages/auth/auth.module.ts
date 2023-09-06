import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '@app/pages/auth/login/login.component';
import { SignupComponent } from '@app/pages/auth/signup/signup.component';
import { AuthRoutingModule } from '@app/pages/auth/auth-routing.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
