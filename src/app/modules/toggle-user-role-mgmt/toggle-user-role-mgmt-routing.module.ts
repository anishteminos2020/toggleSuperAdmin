import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RollManagementComponent } from "./roll-management/roll-management.component";
import { ToggleUserRoleMgmtComponent } from "./toggle-user-role-mgmt/toggle-user-role-mgmt.component";
import { UserManagementComponent } from "./user-management/user-management.component";

const routes: Routes = [
  {
    path: '',
    component: ToggleUserRoleMgmtComponent,
    children: [
      { path: 'roll-management', component: RollManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleUserRoleMgmtRoutingModule {}
