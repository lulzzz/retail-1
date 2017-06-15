import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxUIModule } from '@swimlane/ngx-ui';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxDatatableModule,
    NgxUIModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxDatatableModule,
    NgxUIModule,
    CollapseModule,
    ModalModule
  ]
})
export class SharedUiModule { }
