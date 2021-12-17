import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountwisePlanListComponent } from "./accountwise-plan-list/accountwise-plan-list.component";
import { BillingAndPaymentMgmtComponent } from "./billing-and-payment-mgmt.component";
import { CreateEmailReminderlistComponent } from "./create-email-reminderlist/create-email-reminderlist.component";
import { CreateInvoiceListComponent } from "./create-invoice-list/create-invoice-list.component";
import { PlancostAndTotalBillingComponent } from "./plancost-and-total-billing/plancost-and-total-billing.component";
import { SearchAccountComponent } from "./search-account/search-account.component";
import { ViewAccountwisePlanListComponent } from "./view-accountwise-plan-list/view-accountwise-plan-list.component";
import { ViewEmailReminderlistComponent } from "./view-email-reminderlist/view-email-reminderlist.component";
import { ViewInvoiceListComponent } from "./view-invoice-list/view-invoice-list.component";
import { ViewPlancostAndTotalBillingComponent } from "./view-plancost-and-total-billing/view-plancost-and-total-billing.component";

const routes: Routes = [
  {
    path: "",
    component: BillingAndPaymentMgmtComponent,
    children: [
      {
        path: "account-wise-plan-list",
        component: AccountwisePlanListComponent,
      },
      {
        path: "craete-email-reminder-list",
        component: CreateEmailReminderlistComponent,
      },
      { path: "create-invoice-list", component: CreateInvoiceListComponent },
      {
        path: "plancost-and-totalbilling",
        component: PlancostAndTotalBillingComponent,
      },
      { path: "search-account", component: SearchAccountComponent },
      {
        path: "view-accountwise-planlist",
        component: ViewAccountwisePlanListComponent,
      },
      {
        path: "view-email-reminder-list",
        component: ViewEmailReminderlistComponent,
      },
      { path: "view-invoice-list", component: ViewInvoiceListComponent },
      {
        path: "view-plancost-and-totalbilling",
        component: ViewPlancostAndTotalBillingComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AccountwisePlanListComponent,
    CreateEmailReminderlistComponent,
    CreateInvoiceListComponent,
    PlancostAndTotalBillingComponent,
    SearchAccountComponent,
    ViewAccountwisePlanListComponent,
    ViewEmailReminderlistComponent,
    ViewInvoiceListComponent,
    ViewPlancostAndTotalBillingComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingAndPaymentMgmtRoutingModule {}
