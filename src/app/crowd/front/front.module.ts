import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjetComponent } from './projet/projet.component'; 
import {AjouterProjetComponent} from './ajouter-projet/ajouter-projet.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [HomeComponent, ProjetComponent,AjouterProjetComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    NgxChartsModule
  ]
})
export class FrontModule { }
