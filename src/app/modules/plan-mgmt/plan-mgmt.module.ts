import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanMgmtRoutingModule } from './plan-mgmt-routing.module';
import { PlanListComponent } from './plan-list/plan-list.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewCustomerListComponent } from './view-customer-list/view-customer-list.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { ViewBillingComponent } from './view-billing/view-billing.component';
import { PlanMgmtComponent } from './plan-mgmt/plan-mgmt.component';


@NgModule({
  declarations: [PlanListComponent, AddPlanComponent, CustomerListComponent, ViewCustomerListComponent, BillingInformationComponent, ViewBillingComponent, PlanMgmtComponent],
  imports: [
    CommonModule,
    PlanMgmtRoutingModule
  ]
})
export class PlanMgmtModule { }
