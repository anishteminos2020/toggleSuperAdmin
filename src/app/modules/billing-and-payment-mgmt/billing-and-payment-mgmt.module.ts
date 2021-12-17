import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingAndPaymentMgmtRoutingModule } from './billing-and-payment-mgmt-routing.module';
import { AccountwisePlanListComponent } from './accountwise-plan-list/accountwise-plan-list.component';
import { ViewAccountwisePlanListComponent } from './view-accountwise-plan-list/view-accountwise-plan-list.component';
import { PlancostAndTotalBillingComponent } from './plancost-and-total-billing/plancost-and-total-billing.component';
import { ViewPlancostAndTotalBillingComponent } from './view-plancost-and-total-billing/view-plancost-and-total-billing.component';
import { SearchAccountComponent } from './search-account/search-account.component';
import { CreateInvoiceListComponent } from './create-invoice-list/create-invoice-list.component';
import { ViewInvoiceListComponent } from './view-invoice-list/view-invoice-list.component';
import { CreateEmailReminderlistComponent } from './create-email-reminderlist/create-email-reminderlist.component';
import { ViewEmailReminderlistComponent } from './view-email-reminderlist/view-email-reminderlist.component';
import { BillingAndPaymentMgmtComponent } from './billing-and-payment-mgmt.component';


@NgModule({
  declarations: [AccountwisePlanListComponent, ViewAccountwisePlanListComponent, PlancostAndTotalBillingComponent, ViewPlancostAndTotalBillingComponent, SearchAccountComponent, CreateInvoiceListComponent, ViewInvoiceListComponent, CreateEmailReminderlistComponent, ViewEmailReminderlistComponent, BillingAndPaymentMgmtComponent],
  imports: [
    CommonModule,
    BillingAndPaymentMgmtRoutingModule
  ]
})
export class BillingAndPaymentMgmtModule { }
