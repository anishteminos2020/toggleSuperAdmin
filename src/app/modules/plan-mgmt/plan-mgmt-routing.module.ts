import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "../customer-or-account-mgmt/customer-list/customer-list.component";
import { AddPlanComponent } from "./add-plan/add-plan.component";
import { BillingInformationComponent } from "./billing-information/billing-information.component";
import { PlanMgmtComponent } from "./plan-mgmt/plan-mgmt.component";
import { ViewBillingComponent } from "./view-billing/view-billing.component";
import { ViewCustomerListComponent } from "./view-customer-list/view-customer-list.component";

const routes: Routes = [
  {
    path: "",
    component: PlanMgmtComponent,
    children: [
      {
        path: "add-plan",
        component: AddPlanComponent,
      },
      {
        path: "billing-information",
        component: BillingInformationComponent,
      },
      {
        path: "customer-list",
        component: CustomerListComponent,
      },
      {
        path: "plan-mgmt",
        component: PlanMgmtComponent,
      },
      {
        path: "view-billing",
        component: ViewBillingComponent,
      },
      {
        path: "view-customer",
        component: ViewCustomerListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AddPlanComponent,
    BillingInformationComponent,
    CustomerListComponent,
    PlanMgmtComponent,
    ViewBillingComponent,
    ViewCustomerListComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanMgmtRoutingModule {}
