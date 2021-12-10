import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketListAndSupportRoutingModule } from './ticket-list-and-support-routing.module';
import { CreateOpenTicketListComponent } from './create-open-ticket-list/create-open-ticket-list.component';
import { ViewOpenTicketListComponent } from './view-open-ticket-list/view-open-ticket-list.component';
import { SlaCreationListComponent } from './sla-creation-list/sla-creation-list.component';
import { ViewSlaCreationListComponent } from './view-sla-creation-list/view-sla-creation-list.component';
import { ClosedTicketListComponent } from './closed-ticket-list/closed-ticket-list.component';
import { ViewClosedTicketListComponent } from './view-closed-ticket-list/view-closed-ticket-list.component';


@NgModule({
  declarations: [CreateOpenTicketListComponent, ViewOpenTicketListComponent, SlaCreationListComponent, ViewSlaCreationListComponent, ClosedTicketListComponent, ViewClosedTicketListComponent],
  imports: [
    CommonModule,
    TicketListAndSupportRoutingModule
  ]
})
export class TicketListAndSupportModule { }
