import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClosedTicketListComponent } from "./closed-ticket-list/closed-ticket-list.component";
import { CreateOpenTicketListComponent } from "./create-open-ticket-list/create-open-ticket-list.component";
import { SlaCreationListComponent } from "./sla-creation-list/sla-creation-list.component";
import { TicketListAndSupportComponent } from "./ticket-list-and-support/ticket-list-and-support.component";
import { ViewClosedTicketListComponent } from "./view-closed-ticket-list/view-closed-ticket-list.component";
import { ViewOpenTicketListComponent } from "./view-open-ticket-list/view-open-ticket-list.component";
import { ViewSlaCreationListComponent } from "./view-sla-creation-list/view-sla-creation-list.component";

const routes: Routes = [
  {
    path: "",
    component: TicketListAndSupportComponent,
    children: [
      { path: "closed-ticket-list", component: ClosedTicketListComponent },
      {
        path: "create-open-ticket-list",
        component: CreateOpenTicketListComponent,
      },
      { path: "sla-creation-list", component: SlaCreationListComponent },
      {
        path: "view-closed-ticket-list",
        component: ViewClosedTicketListComponent,
      },
      { path: "view-open-ticket-list", component: ViewOpenTicketListComponent },
      {
        path: "view-sla-creation-list",
        component: ViewSlaCreationListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ClosedTicketListComponent,
    CreateOpenTicketListComponent,
    SlaCreationListComponent,
    ViewClosedTicketListComponent,
    ViewOpenTicketListComponent,
    ViewSlaCreationListComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketListAndSupportRoutingModule {}
