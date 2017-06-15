import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { SharedUIModule } from '../shared/modules/shared.ui.module';


import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedUIModule
  ],
  declarations: [
    HomeComponent,
    IndexComponent,
    HeaderComponent,
    SidebarComponent
  ]
})

export class HomeModule { }
