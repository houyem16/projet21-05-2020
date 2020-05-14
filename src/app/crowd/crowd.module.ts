import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdRoutingModule } from './crowd-routing.module';
import { FrontComponent } from './templates/front/front.component';

@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    CrowdRoutingModule
  ]
})
export class CrowdModule { }
