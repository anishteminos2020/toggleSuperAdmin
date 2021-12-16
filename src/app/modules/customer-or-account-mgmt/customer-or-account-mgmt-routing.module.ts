import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOrAccountMgmtComponent } from './customer-or-account-mgmt/customer-or-account-mgmt.component';
import { CallStatisticsComponent } from './call-statistics/call-statistics.component';
import { KycDocumentComponent } from './kyc-document/kyc-document.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewKycDocumentComponent } from './view-kyc-document/view-kyc-document.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TotalAddministatedComponent } from './total-addministated/total-addministated.component';


const routes: Routes = [
  {
    path: "",
    component: CustomerOrAccountMgmtComponent,
    children: [
      { path: "call-statistics", component: CallStatisticsComponent },
      { path: "kyc-document", component: KycDocumentComponent },
      { path: "plan-list", component: PlanListComponent },
      { path: "view-customer", component: ViewCustomerComponent },
      { path: "view-kyc-document", component: ViewKycDocumentComponent },
      { path: "view-plan", component: ViewPlanComponent },
      { path: "customer-list", component: CustomerListComponent },
      { path: "total-addministated", component: TotalAddministatedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOrAccountMgmtRoutingModule { }
