import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';

import { SharedUiModule } from '../shared/shared-ui.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedUiModule
  ],
  declarations: [
    HomeComponent,
    IndexComponent
  ]
})

export class HomeModule { }
