import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontComponent} from './templates/front/front.component';
import {LoginPageComponent} from './login/login-page.component';
import {RegisterPageComponent} from './register/register-page.component';

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
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'register', component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrowdRoutingModule { }
