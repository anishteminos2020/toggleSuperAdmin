import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DownloadCdrNumberComponent } from "./download-cdr-number/download-cdr-number.component";
import { NumberMgmtComponent } from "./number-mgmt/number-mgmt.component";
import { NumberTypeListComponent } from "./number-type-list/number-type-list.component";
import { ViewNumberTypeListComponent } from "./view-number-type-list/view-number-type-list.component";

const routes: Routes = [
  {
    path: "",
    component: NumberMgmtComponent,
    children: [
      {
        path: "download-cdr-number",
        component: DownloadCdrNumberComponent,
      },
      {
        path: "number-type-list",
        component: NumberTypeListComponent,
      },
      {
        path: "view-number-type",
        component: ViewNumberTypeListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DownloadCdrNumberComponent,
    NumberTypeListComponent,
    ViewNumberTypeListComponent,
  ],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberMgmtRoutingModule {}
