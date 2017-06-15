import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';

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
    IndexComponent,
    HeaderComponent,
    SidebarComponent
  ]
})

export class HomeModule { }
