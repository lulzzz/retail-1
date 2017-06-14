import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuardService } from '../shared/services/auth.guard.service';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{
      path: '',
      canActivateChild: [AuthGuardService],
      children: [
        { path: '', component: IndexComponent },
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
