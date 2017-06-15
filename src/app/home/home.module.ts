import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
<<<<<<< a570c0cf0b23b075ce134630bb69efc07d3361fd
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
=======
import { SharedUIModule } from '../shared/modules/shared.ui.module';
>>>>>>> 修改头部和侧边栏

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
