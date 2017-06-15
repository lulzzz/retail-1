import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

import {SharedUiModule} from './shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedComponentsModule {
}
