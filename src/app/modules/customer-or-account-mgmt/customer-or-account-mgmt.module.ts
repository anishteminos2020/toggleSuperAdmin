import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerOrAccountMgmtRoutingModule } from "./customer-or-account-mgmt-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { ViewCustomerComponent } from "./view-customer/view-customer.component";
import { KycDocumentComponent } from "./kyc-document/kyc-document.component";
import { ViewKycDocumentComponent } from "./view-kyc-document/view-kyc-document.component";
import { PlanListComponent } from "./plan-list/plan-list.component";
import { ViewPlanComponent } from "./view-plan/view-plan.component";
import { CallStatisticsComponent } from "./call-statistics/call-statistics.component";
import { CustomerOrAccountMgmtComponent } from "./customer-or-account-mgmt/customer-or-account-mgmt.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { TotalAddministatedComponent } from './total-addministated/total-addministated.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    ViewCustomerComponent,
    KycDocumentComponent,
    ViewKycDocumentComponent,
    PlanListComponent,
    ViewPlanComponent,
    CallStatisticsComponent,
    CustomerOrAccountMgmtComponent,
    TotalAddministatedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CustomerOrAccountMgmtRoutingModule,
  ],
})
export class CustomerOrAccountMgmtModule {}
