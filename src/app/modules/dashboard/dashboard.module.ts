import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, SharedModule,NgApexchartsModule],
  exports:[
    NgApexchartsModule
  ]
})
export class DashboardModule {}
