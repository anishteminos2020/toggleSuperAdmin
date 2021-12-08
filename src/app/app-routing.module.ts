import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // un-authenticated routes
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "toggle-user-role-mgmt",
    loadChildren:
      "./modules/toggle-user-role-mgmt/toggle-user-role-mgmt.module#ToggleUserRoleMgmtModule",
  },
  {
    path: "client-user-role-mgmt",
    loadChildren:
      "./modules/client-user-role-mgmt/client-user-role-mgmt.module#ClientUserRoleMgmtModule",
  },
  {
    path: "customer-or-account-mgmt",
    loadChildren:
      "./modules/customer-or-account-mgmt/customer-or-account-mgmt.module#CustomerOrAccountMgmtModule",
  },

  {
    path: "master",
    loadChildren: "./modules/master/master.module#MasterModule",
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
