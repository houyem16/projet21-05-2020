import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdRoutingModule } from './crowd-routing.module';
import { FrontComponent } from './templates/front/front.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    CrowdRoutingModule,
    SharedModule
  ]
})
export class CrowdModule { }
