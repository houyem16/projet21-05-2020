import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdRoutingModule } from './crowd-routing.module';
import { FrontComponent } from './templates/front/front.component';
import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login/login-page.component';
import {RegisterPageComponent} from './register/register-page.component';

@NgModule({
  declarations: [FrontComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    CrowdRoutingModule,
    SharedModule
  ]
})
export class CrowdModule { }
