import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberMgmtRoutingModule } from './number-mgmt-routing.module';
import { NumberTypeListComponent } from './number-type-list/number-type-list.component';
import { ViewNumberTypeListComponent } from './view-number-type-list/view-number-type-list.component';
import { DownloadCdrNumberComponent } from './download-cdr-number/download-cdr-number.component';
import { NumberMgmtComponent } from './number-mgmt/number-mgmt.component';


@NgModule({
  declarations: [NumberTypeListComponent, ViewNumberTypeListComponent, DownloadCdrNumberComponent, NumberMgmtComponent],
  imports: [
    CommonModule,
    NumberMgmtRoutingModule
  ]
})
export class NumberMgmtModule { }
