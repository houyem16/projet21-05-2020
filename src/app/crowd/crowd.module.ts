import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdRoutingModule } from './crowd-routing.module';
import { FrontComponent } from './templates/front/front.component';
import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login/login-page.component';
import {RegisterPageComponent} from './register/register-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FrontComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    CrowdRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CrowdModule { }
