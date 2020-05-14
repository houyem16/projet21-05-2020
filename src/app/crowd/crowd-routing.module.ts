import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontComponent} from './templates/front/front.component';

const routes: Routes = [
  {
    path: 'front',
    component: FrontComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrowdRoutingModule { }
